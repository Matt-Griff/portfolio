import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
    // Single elements (section headers, paragraphs) fade in on their own.
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
        });
    });

    // Cards in a grid/list reveal together with a small stagger.
    gsap.set('[data-reveal-batch]', { opacity: 0, y: 40 });
    ScrollTrigger.batch('[data-reveal-batch]', {
        start: 'top 85%',
        once: true,
        onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }),
    });
}
