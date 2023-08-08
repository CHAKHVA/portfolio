import Link from "next/link";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

export default function Projects() {
    return (
        <div
            id="projects"
            className="w-full h-screen text-center flex flex-col items-center justify-center gap-[3rem] px-12"
        >
            <div>
                <ul className="flex items-center gap-6 [&>li]:p-2 [&>li]:rounded-full [&>li]:shadow-md [&>li]:cursor-pointer [&>li]:transition [&>li]:duration-300 hover:[&>li]:text-[#512bd4]">
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/aleksandre-chakhvashvili/"
                            target="_blank"
                        >
                            <BiLogoLinkedin size={35} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/CHAKHVA" target="_blank">
                            <BiLogoGithub size={35} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
