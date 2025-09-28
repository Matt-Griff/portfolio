import { useEffect } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(TextPlugin);

export default function Name() {
    useEffect(() => {
        gsap.to(".name", {
            duration: 1,
            scrambleText: {
                text: "Matthieu"
            }
        });

        gsap.to(".last-name", {
            duration: 1,
            scrambleText: {
                text: "Griffonnet"
            }
        });

        changeDesc();
    }, []);

    return (
        <div className="text-white mt-[5rem] ml-[5rem] pb-8">
            <div className="name text-9xl"></div>
            <div className="last-name text-9xl ml-[10rem]"></div>
            <div className="desc text-2xl mt-4"></div>
            <div className="bar"></div>
        </div>
    );

    async function changeDesc() {
        const citations = [
            "I'm passionate about IT",
            "I'm 21 years old",
            "I'm pursuing an engineering degree in IT",
            "I love football",
            "I'm always eager to learn new technologies",
            "I enjoy working on challenging coding projects",
            "Teamwork is at the heart of everything I do",
            "I follow the esports scene closely",
            "I like building clean and efficient back-end systems",
            "I'm currently improving my skills in web development",
        ];

        while (true) {
            const citation = citations[Math.floor(Math.random() * citations.length)];
            gsap.to(".desc", {
                duration: 2,
                text: citation,
            });
            await new Promise(resolve => setTimeout(resolve, 4000));
        }
    }
}
