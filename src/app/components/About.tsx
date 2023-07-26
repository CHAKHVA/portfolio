import Image from "next/image";

export default function About() {
    return (
        <div
            id="about"
            className="w-full h-screen text-center flex flex-col lg:text-left lg:flex-row items-center justify-center gap-12 px-12"
        >
            <div>
                <Image
                    className="rounded-lg w-[500px] h-[400px]"
                    src="/assets/about.jpg"
                    alt="Laptop and Coffee"
                    width={500}
                    height={500}
                ></Image>
            </div>
            <div className="flex flex-col gap-y-6">
                <div className="text-2xl font-bold text-[#512bd4]">
                    ABOUT ME
                </div>
                <div className="text-xl font-semibold mx-auto max-w-[500px]">
                    A devoted Backend Developer based in Tbilisi, Georgia 📍
                </div>
                <div className="text-lg mx-auto max-w-[500px]">
                    As an accomplished Backend Developer, my expertise lies in
                    C#/.NET and Python/Django, while I also maintain a solid
                    understanding of front-end technologies such as HTML, CSS,
                    JavaScript, ReactJS, NextJS, Tailwind, and SCSS. I excel at
                    building and managing robust server-side applications,
                    writing clean, efficient, and scalable code. I am also a
                    team player who thrives in collaborating with
                    cross-functional teams to produce outstanding web
                    applications.
                </div>
            </div>
        </div>
    );
}
