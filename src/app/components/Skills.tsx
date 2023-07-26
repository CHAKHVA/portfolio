import Image from "next/image";

export default function Skills() {
    return (
        <div
            id="skills"
            className="w-full h-screen mt-24 text-center flex flex-col items-center justify-center gap-[3rem] px-12"
        >
            <div className="text-4xl font-bold text-[#512bd4] border-b-gray-800">
                Skills
            </div>
            <div className="text-lg font-medium grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/csharp.png"
                        width={50}
                        height={50}
                        alt="C#"
                    />
                    <span className="text-xl">C#</span>
                </div>
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/dotNETCore.png"
                        width={50}
                        height={50}
                        alt="ASP.NET Core"
                    />
                    <span className="text-xl">ASP.NET Core</span>
                </div>
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/python.png"
                        width={50}
                        height={50}
                        alt="Python"
                    />
                    <span className="text-xl">Python</span>
                </div>
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/java.png"
                        width={50}
                        height={50}
                        alt="Java"
                    />
                    <span className="text-xl">Java</span>
                </div>

                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/typescript.png"
                        width={50}
                        height={50}
                        alt="TypeScript"
                    />
                    <span className="text-xl">TypeScript</span>
                </div>
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/react.png"
                        width={50}
                        height={50}
                        alt="ReactJS"
                    />
                    <span className="text-xl">ReactJS</span>
                </div>
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/nextjs.png"
                        width={50}
                        height={50}
                        alt="NextJS"
                    />
                    <span className="text-xl">NextJS</span>
                </div>
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/angular.png"
                        width={50}
                        height={50}
                        alt="Angular"
                    />
                    <span className="text-xl">Angular</span>
                </div>
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/sql.png"
                        width={50}
                        height={50}
                        alt="SQL"
                    />
                    <span className="text-xl">SQL</span>
                </div>
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/azure.png"
                        width={50}
                        height={50}
                        alt="Azure"
                    />
                    <span className="text-xl">Azure</span>
                </div>
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/docker.png"
                        width={50}
                        height={50}
                        alt="Docker"
                    />
                    <span className="text-xl">Docker</span>
                </div>
                <div className="px-3 py-6 duration-500 hover:shadow-skill flex items-center justify-start gap-3 border-[3px] rounded-md border-black">
                    <Image
                        src="/assets/git.png"
                        width={50}
                        height={50}
                        alt="Git"
                    />
                    <span className="text-xl">Git</span>
                </div>
            </div>
        </div>
    );
}
