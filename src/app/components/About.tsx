import Link from "next/link";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

export default function About() {
    return (
        <div
            id="about"
            className="w-full h-screen text-center flex flex-col items-center justify-center gap-[3rem] px-12"
        >
            <div className="text-4xl font-bold text-[#512bd4]">ABOUT ME</div>
            <div className="text-2xl font-semibold">
                A devoted Backend Developer based in Tbilisi, Georgia 📍
            </div>
            <div className="text-lg">
                As an accomplished Backend Developer, my expertise lies in
                C#/.NET and Python/Django, while I also maintain a solid
                understanding of front-end technologies such as HTML, CSS,
                JavaScript, ReactJS, NextJS, Tailwind, and SCSS. I excel at
                building and managing robust server-side applications, writing
                clean, efficient, and scalable code. I am also a team player who
                thrives in collaborating with cross-functional teams to produce
                outstanding web applications.
            </div>
        </div>
    );
}
