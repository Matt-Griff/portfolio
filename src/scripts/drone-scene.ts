// three.js scene for the Education timeline: a quadcopter that follows the flight path
// and lands on a patch of grass. Loaded on demand (desktop only) by Education.astro.
//
// World units are CSS pixels in the timeline's coordinate space, with y flipped
// (timeline y down = world -y), so path coordinates map 1:1 onto the scene.

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export type DroneState = { x: number; y: number; progress: number };

/** Distance from the drone's origin down to the bottom of its skids. Education.astro uses it to land. */
export const DRONE_FEET = 16;

// The canvas overhangs the timeline vertically so the drone isn't clipped at the start of the flight.
const PAD_Y = 120;
const FOV = 35;

// The grass strip spans the timeline's width (set in setGround); these fix its depth and density.
const GRASS_RZ = 130;
const GRASS_DENSITY = 0.042; // blades per square pixel
const GRASS_MAX = 12000;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const damp = (current: number, target: number, rate: number, dt: number) =>
    current + (target - current) * (1 - Math.exp(-rate * dt));

function radialTexture(stops: [number, string][]) {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d')!;
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    stops.forEach(([at, color]) => g.addColorStop(at, color));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

function readAccent() {
    const value = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
    return new THREE.Color(value || '#a78bfa');
}

function buildDrone(accent: THREE.MeshStandardMaterial) {
    const drone = new THREE.Group();

    const shell = new THREE.MeshPhysicalMaterial({
        color: 0xd9dce1,
        roughness: 0.38,
        metalness: 0.05,
        clearcoat: 0.8,
        clearcoatRoughness: 0.25,
    });
    const dark = new THREE.MeshStandardMaterial({ color: 0x1d2025, roughness: 0.55, metalness: 0.2 });
    const metal = new THREE.MeshStandardMaterial({ color: 0x8d939b, roughness: 0.28, metalness: 0.9 });
    const glass = new THREE.MeshPhysicalMaterial({ color: 0x05070a, roughness: 0.05, clearcoat: 1 });
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0x2a2d31, roughness: 0.6, transparent: true });
    const blurMat = new THREE.MeshBasicMaterial({
        color: 0x7a7f87,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
    });

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0, parent: THREE.Object3D = drone) => {
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, y, z);
        parent.add(mesh);
        return mesh;
    };

    // Body: shell, accent waist band, top cover, rear battery.
    add(new RoundedBoxGeometry(30, 13, 50, 4, 5), shell);
    add(new RoundedBoxGeometry(30.8, 2, 50.8, 2, 1), accent, 0, -1.5, 0);
    add(new RoundedBoxGeometry(20, 4, 30, 3, 2), dark, 0, 6.5, -2);
    add(new RoundedBoxGeometry(24, 9, 12, 3, 3), dark, 0, 0.5, -28);

    // Front camera gimbal.
    add(new RoundedBoxGeometry(11, 9, 9, 3, 3), dark, 0, -7, 25);
    add(new THREE.CylinderGeometry(3.6, 3.6, 2, 24).rotateX(Math.PI / 2), metal, 0, -7, 30);
    add(new THREE.SphereGeometry(3, 24, 16), glass, 0, -7, 30.6);

    const props: { group: THREE.Group; dir: number }[] = [];

    for (const [sx, sz] of [
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1],
    ]) {
        const motor = new THREE.Vector3(sx * 40, 1, sz * 36);

        // Arm from the body corner out to the motor.
        const root = new THREE.Vector3(sx * 11, 0, sz * 16);
        const arm = add(new THREE.BoxGeometry(5, 4, root.distanceTo(motor)), dark);
        arm.position.copy(root).lerp(motor, 0.5);
        arm.lookAt(motor);

        add(new THREE.CylinderGeometry(5.5, 6, 8, 24), dark, motor.x, motor.y + 2, motor.z);
        add(new THREE.CylinderGeometry(4, 4, 2, 24), metal, motor.x, motor.y + 7, motor.z);

        // Navigation LED under each motor: red at the front, green at the back.
        add(
            new THREE.SphereGeometry(1.6, 12, 8),
            new THREE.MeshBasicMaterial({ color: sz > 0 ? 0xff3344 : 0x33ff88 }),
            motor.x,
            motor.y - 3,
            motor.z
        );

        // Two-blade propeller, slightly twisted, plus a disc that stands in for motion blur.
        const group = new THREE.Group();
        group.position.set(motor.x, motor.y + 9.5, motor.z);
        add(new THREE.CylinderGeometry(2, 2, 2.4, 16), metal, 0, 0, 0, group);
        for (const side of [1, -1]) {
            const blade = add(new RoundedBoxGeometry(19, 0.8, 3.8, 2, 0.4), bladeMat, side * 10.5, 0, 0, group);
            blade.rotation.x = side * 0.2;
        }
        drone.add(group);
        add(new THREE.CircleGeometry(21, 48).rotateX(-Math.PI / 2), blurMat, motor.x, motor.y + 9.5, motor.z);

        props.push({ group, dir: sx * sz });
    }

    // Landing gear: two angled legs per side and a skid tube.
    for (const sx of [1, -1]) {
        for (const z of [14, -14]) {
            const top = new THREE.Vector3(sx * 9, -5, z);
            const bottom = new THREE.Vector3(sx * 15, -14.5, z);
            const leg = add(new THREE.CylinderGeometry(1.1, 1.1, top.distanceTo(bottom), 10), dark);
            leg.position.copy(top).lerp(bottom, 0.5);
            leg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), top.clone().sub(bottom).normalize());
        }
        add(new THREE.CylinderGeometry(1.4, 1.4, 46, 12).rotateX(Math.PI / 2), dark, sx * 15, -DRONE_FEET + 1.4, 0);
    }

    return { drone, props, bladeMat, blurMat };
}

function buildGrass() {
    const group = new THREE.Group();

    // Soil and short turf under the blades, fading out at the edges.
    const turf = new THREE.Mesh(
        new THREE.CircleGeometry(1, 64).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({
            map: radialTexture([
                [0, 'rgba(46,78,28,1)'],
                [0.6, 'rgba(40,70,24,0.9)'],
                [1, 'rgba(40,70,24,0)'],
            ]),
            transparent: true,
            depthWrite: false,
        })
    );
    group.add(turf);

    // Soft contact shadow under the drone.
    const shadow = new THREE.Mesh(
        new THREE.CircleGeometry(1, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({
            map: radialTexture([
                [0, 'rgba(0,0,0,0.85)'],
                [0.5, 'rgba(0,0,0,0.4)'],
                [1, 'rgba(0,0,0,0)'],
            ]),
            transparent: true,
            depthWrite: false,
        })
    );
    shadow.position.y = 0.5;
    group.add(shadow);

    // Instanced blades. Shape, wind and rotor downwash all happen in the vertex shader.
    const blade = new THREE.PlaneGeometry(1, 1, 1, 5).translate(0, 0.5, 0);
    const material = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        uniforms: {
            uTime: { value: 0 },
            uDrone: { value: new THREE.Vector3() },
            uWash: { value: 0 },
            uBase: { value: new THREE.Color(0x1d4a12) },
            uTip: { value: new THREE.Color(0x9ccc52) },
        },
        vertexShader: /* glsl */ `
            uniform float uTime;
            uniform vec3 uDrone;
            uniform float uWash;
            attribute float aRand;
            varying float vH;
            varying float vRand;

            void main() {
                vec3 p = position;
                float h = p.y;
                p.x *= 1.0 - h * 0.9;

                mat4 m = modelMatrix * instanceMatrix;
                vec3 root = (m * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
                float bladeH = length(instanceMatrix[1].xyz);
                vec3 wp = (m * vec4(p, 1.0)).xyz;

                // Natural lean plus a slow gust and a little per-blade flutter.
                float gust = sin(uTime * 1.3 + root.x * 0.025 + root.z * 0.04) * 0.35;
                float flutter = sin(uTime * 2.7 + aRand * 6.283) * 0.12;
                vec2 bend = vec2(gust + flutter + (aRand - 0.5) * 0.6, (aRand - 0.5) * 0.4 + 0.15);

                // Rotor downwash pushes blades away from the drone, stronger as it gets lower.
                vec2 away = root.xz - uDrone.xz;
                float height = max(uDrone.y - root.y, 0.0);
                float wash = uWash
                    * clamp(1.0 - length(away) / 170.0, 0.0, 1.0)
                    * clamp(1.0 - height / 260.0, 0.0, 1.0);
                bend += normalize(away + vec2(0.001)) * wash * 1.6;
                bend.x += sin(uTime * 28.0 + aRand * 40.0) * wash * 0.25;

                float k = h * h * bladeH;
                wp.xz += bend * k * 0.55;
                wp.y -= dot(bend, bend) * k * 0.18;

                vH = h;
                vRand = aRand;
                gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
            }
        `,
        fragmentShader: /* glsl */ `
            uniform vec3 uBase;
            uniform vec3 uTip;
            varying float vH;
            varying float vRand;

            void main() {
                vec3 c = mix(uBase, uTip, smoothstep(0.0, 1.0, vH));
                c *= 0.8 + vRand * 0.35;
                c *= mix(0.45, 1.0, smoothstep(0.0, 0.35, vH));
                gl_FragColor = vec4(c, 1.0);
                #include <colorspace_fragment>
            }
        `,
    });

    const blades = new THREE.InstancedMesh(blade, material, GRASS_MAX);
    const rand = new THREE.InstancedBufferAttribute(new Float32Array(GRASS_MAX), 1);
    blade.setAttribute('aRand', rand);
    blades.frustumCulled = false;
    blades.count = 0; // filled by layout() once the timeline width is known
    group.add(blades);

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);

    /** Fill a rounded-rectangle strip `rx` px either side of centre, keeping the same blade density. */
    function layout(rx: number) {
        let seed = 7;
        const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
        const count = Math.min(GRASS_MAX, Math.round(GRASS_DENSITY * 4 * rx * GRASS_RZ * 0.9));

        for (let i = 0; i < count; ) {
            const u = random() * 2 - 1;
            const v = random() * 2 - 1;
            // Superellipse distance: a strip with rounded corners rather than an oval.
            const r = (u ** 4 + v ** 4) ** 0.25;
            // Uniform inside, thinning out towards the edge.
            if (r > 1 || random() < r ** 4 * 0.85) continue;
            const height = (12 + random() * 20) * (1 - 0.5 * r * r);
            const width = 2.6 + random() * 1.6;
            q.setFromAxisAngle(up, random() * Math.PI);
            m.compose(new THREE.Vector3(u * rx, 0, v * GRASS_RZ), q, new THREE.Vector3(width, height, 1));
            blades.setMatrixAt(i, m);
            rand.setX(i, random());
            i++;
        }
        blades.count = count;
        blades.instanceMatrix.needsUpdate = true;
        rand.needsUpdate = true;
        turf.scale.set(rx * 1.15, 1, GRASS_RZ * 1.3);
    }

    return { group, material, shadow, layout };
}

export function createDroneScene(host: HTMLElement, state: DroneState, { animate }: { animate: boolean }) {
    let renderer: THREE.WebGLRenderer;
    try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    } catch {
        return null;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const canvas = renderer.domElement;
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = `position:absolute;left:0;top:${-PAD_Y}px;pointer-events:none;z-index:10;`;
    host.appendChild(canvas);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envMap;
    scene.environmentIntensity = 0.8;

    scene.add(new THREE.HemisphereLight(0xe4f0ff, 0x35552a, 0.7));
    const sun = new THREE.DirectionalLight(0xffffff, 1.8);
    sun.position.set(0.4, 1, 0.7);
    scene.add(sun);
    const rim = new THREE.DirectionalLight(0xbfd8ff, 0.8);
    rim.position.set(-0.6, 0.3, -1);
    scene.add(rim);

    const camera = new THREE.PerspectiveCamera(FOV, 1, 10, 10000);

    const accent = new THREE.MeshStandardMaterial({ roughness: 0.4, emissiveIntensity: 0.25 });
    const applyAccent = () => {
        const c = readAccent();
        accent.color.copy(c);
        accent.emissive.copy(c);
    };
    applyAccent();

    const { drone, props, bladeMat, blurMat } = buildDrone(accent);
    // Outer group takes the banking; the inner drone keeps its own heading.
    const rig = new THREE.Group();
    rig.add(drone);
    scene.add(rig);

    const grass = buildGrass();
    scene.add(grass.group);

    let grassRx = 0;
    let width = 1;
    let height = 1;
    let landed = state.progress > 0.995;
    let rotor = landed ? 0 : 1;
    let vx = 0;
    let vy = 0;
    let prevX = state.x;
    let prevY = state.y;
    let time = 0;
    let raf = 0;
    let visible = false;
    const clock = new THREE.Clock();

    function frame(dt: number) {
        time += dt;
        landed = state.progress > 0.995;
        rotor = damp(rotor, landed ? 0 : 1, landed ? 1.4 : 5, dt);
        if (!animate) rotor = landed ? 0 : 1;

        // Smoothed velocity drives banking.
        if (dt > 0) {
            vx = damp(vx, (state.x - prevX) / dt, 6, dt);
            vy = damp(vy, (state.y - prevY) / dt, 6, dt);
        }
        prevX = state.x;
        prevY = state.y;

        const groundY = grass.group.position.y;
        const altitude = -state.y - DRONE_FEET - groundY;

        const bob = Math.sin(time * 2.2) * 2.5 * rotor * clamp(altitude / 60, 0, 1);
        rig.position.set(state.x, -state.y + bob, 0);
        rig.rotation.z = damp(rig.rotation.z, clamp(-vx * 0.0012, -0.35, 0.35) * rotor, 8, dt);
        rig.rotation.x = damp(rig.rotation.x, clamp(vy * 0.0005, -0.15, 0.15) * rotor, 8, dt);
        drone.rotation.y = -0.55 + Math.sin(time * 0.4) * 0.08 * rotor;

        for (const { group, dir } of props) group.rotation.y += dir * rotor * 55 * dt;
        const blur = THREE.MathUtils.smoothstep(rotor, 0.3, 1);
        bladeMat.opacity = 1 - blur * 0.85;
        blurMat.opacity = blur * 0.35;

        const dx = state.x - grass.group.position.x;
        // The shadow only shows while the drone is above the grass.
        const over = clamp(1 - (dx / grassRx) ** 4, 0, 1);
        const lift = Math.max(altitude, 0);
        grass.shadow.position.x = dx;
        grass.shadow.scale.set(30 + lift * 0.12, 1, 22 + lift * 0.08);
        (grass.shadow.material as THREE.MeshBasicMaterial).opacity = over * clamp(1 - lift / 320, 0, 1) * 0.6;

        grass.material.uniforms.uTime.value = time;
        grass.material.uniforms.uDrone.value.set(rig.position.x, rig.position.y, 0);
        grass.material.uniforms.uWash.value = rotor;

        renderer.render(scene, camera);
    }

    function loop() {
        raf = requestAnimationFrame(loop);
        frame(Math.min(clock.getDelta(), 0.05));
    }

    function start() {
        if (raf || !animate || !visible) return;
        clock.getDelta();
        loop();
    }

    function stop() {
        cancelAnimationFrame(raf);
        raf = 0;
    }

    const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        visible ? start() : stop();
    });
    io.observe(host);

    const themeObserver = new MutationObserver(() => {
        applyAccent();
        render();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    /** Draw a single frame (used when not animating, e.g. under reduced motion). */
    function render() {
        if (!raf) frame(0);
    }

    return {
        /** Match the timeline's size in CSS pixels. */
        setSize(w: number, h: number) {
            width = Math.max(1, w);
            height = Math.max(1, h);
            const viewH = height + PAD_Y * 2;
            renderer.setSize(width, viewH);
            camera.aspect = width / viewH;
            const distance = viewH / 2 / Math.tan(THREE.MathUtils.degToRad(FOV / 2));
            camera.position.set(width / 2, -height / 2, distance);
            camera.lookAt(width / 2, -height / 2, 0);
            camera.near = distance / 10;
            camera.far = distance * 3;
            camera.updateProjectionMatrix();
            render();
        },
        /** Centre of the grass, in timeline pixels. */
        setGround(x: number, y: number, halfWidth: number) {
            grass.group.position.set(x, -y, 0);
            // The front edge is nearer the camera and looks wider, so keep a margin to avoid clipping at the canvas sides.
            const rx = Math.max(100, halfWidth * 0.88);
            if (Math.abs(rx - grassRx) > 1) {
                grassRx = rx;
                grass.layout(rx);
            }
            render();
        },
        render,
        dispose() {
            stop();
            io.disconnect();
            themeObserver.disconnect();
            scene.traverse((o) => {
                if (o instanceof THREE.Mesh) {
                    o.geometry.dispose();
                    const mats = Array.isArray(o.material) ? o.material : [o.material];
                    mats.forEach((mat) => {
                        (mat as THREE.MeshBasicMaterial).map?.dispose();
                        mat.dispose();
                    });
                }
            });
            envMap.dispose();
            pmrem.dispose();
            renderer.dispose();
            canvas.remove();
        },
    };
}
