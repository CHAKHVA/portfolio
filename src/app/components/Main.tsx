import Link from "next/link";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

export default function Main() {
    return (
        <div
            id="home"
            className="w-full h-screen text-center flex flex-col items-center justify-center gap-[3rem] px-12"
        >
            <div className="text-4xl font-bold">Software Engineer 👋</div>
            <div className="text-lg font-medium mx-auto max-w-[500px]">
                Hi, I&apos;m&nbsp;
                <span className="text-[#512bd4]">
                    Aleksandre Chakhvashvili.
                </span>
                &nbsp; A passionate for crafting efficient and scalable
                solutions. Proficient in various languages and frameworks.
            </div>
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
