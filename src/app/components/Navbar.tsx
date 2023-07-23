"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState<Boolean>(false);
    const [active, setActive] = useState<String>("Home");

    const handleMobileNav = (event: React.MouseEvent) => {
        const target = event.target as HTMLElement;
        setActive(target.innerText);
        setShowMobileNav(false);
    };

    const handleActive = (event: React.MouseEvent) => {
        const target = event.target as HTMLElement;
        setActive(target.innerText);
    };
    return (
        <nav className="shadow-md w-full h-20 sticky text-[#2f2f2f] bg-[#f2f2f2]">
            <div className="flex flex-nowrap items-center justify-between w-full h-full">
                <div className="text-3xl font-bold pl-12">
                    <Link href="/">
                        <span>A</span>
                        <span className="text-[#512bd4]">C</span>
                    </Link>
                </div>
                <div>
                    <ul className="hidden md:flex items-center justify-between gap-6 mr-12 text-lg [&>li]:font-semibold [&>li]:transition [&>li]:duration-300 hover:[&>li]:text-[#512bd4]">
                        <li
                            className={
                                active === "Home" ? "text-[#512bd4]" : ""
                            }
                            onClick={handleActive}
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            className={
                                active === "About" ? "text-[#512bd4]" : ""
                            }
                            onClick={handleActive}
                        >
                            <Link href="#about">About</Link>
                        </li>
                        <li
                            className={
                                active === "Skills" ? "text-[#512bd4]" : ""
                            }
                            onClick={handleActive}
                        >
                            <Link href="#skills">Skills</Link>
                        </li>
                        <li
                            className={
                                active === "Projects" ? "text-[#512bd4]" : ""
                            }
                            onClick={handleActive}
                        >
                            <Link href="#projects">Projects</Link>
                        </li>
                        <li
                            className={
                                active === "Contact" ? "text-[#512bd4]" : ""
                            }
                            onClick={handleActive}
                        >
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* Mobile Menu */}
                <div className="mr-4 cursor-pointer transition duration-300 hover:text-[#512bd4] md:hidden">
                    <BiMenu size={35} onClick={() => setShowMobileNav(true)} />
                </div>
            </div>
            <div
                className={
                    showMobileNav
                        ? "fixed top-0 left-0 w-full h-screen bg-black/70"
                        : "hidden"
                }
            >
                <div
                    className={`fixed top-0 left-0 w-3/4 sm:w-3/5 md:w-[45%] h-screen bg-[#f2f2f2] px-6 py-3`}
                >
                    <div className="flex w-full justify-between items-center">
                        <div className="text-3xl font-bold p-2 pl-3">
                            <Link href="/">
                                <span>A</span>
                                <span className="text-[#512bd4]">C</span>
                            </Link>
                        </div>
                        <div className="p-2 rounded-full shadow-md cursor-pointer transition duration-300 hover:text-[#512bd4]">
                            <AiOutlineClose
                                size={25}
                                onClick={() => setShowMobileNav(false)}
                            />
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-col justify-between gap-y-6 mt-20 ml-3 text-xl [&>li]:font-semibold [&>li]:transition [&>li]:duration-300 hover:[&>li]:text-[#512bd4]">
                            <li
                                className={
                                    active === "Home" ? "text-[#512bd4]" : ""
                                }
                                onClick={handleMobileNav}
                            >
                                <Link href="/">Home</Link>
                            </li>
                            <li
                                className={
                                    active === "About" ? "text-[#512bd4]" : ""
                                }
                                onClick={handleMobileNav}
                            >
                                <Link href="#about">About</Link>
                            </li>
                            <li
                                className={
                                    active === "Skills" ? "text-[#512bd4]" : ""
                                }
                                onClick={handleMobileNav}
                            >
                                <Link href="#skills">Skills</Link>
                            </li>
                            <li
                                className={
                                    active === "Projects"
                                        ? "text-[#512bd4]"
                                        : ""
                                }
                                onClick={handleMobileNav}
                            >
                                <Link href="#projects">Projects</Link>
                            </li>
                            <li
                                className={
                                    active === "Contact" ? "text-[#512bd4]" : ""
                                }
                                onClick={handleMobileNav}
                            >
                                <Link href="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-t-2 border-x-gray-600 p-3 mt-40">
                        <h3 className="text-xl font-semibold text-[#512bd4]">
                            LET'S CONNECT!
                        </h3>
                        <ul className="flex items-center mt-6 gap-6 [&>li]:p-2 [&>li]:rounded-full [&>li]:shadow-md [&>li]:cursor-pointer [&>li]:transition [&>li]:duration-300 hover:[&>li]:text-[#512bd4]">
                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/aleksandre-chakhvashvili/"
                                    target="_blank"
                                >
                                    <BiLogoLinkedin size={30} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/CHAKHVA"
                                    target="_blank"
                                >
                                    <BiLogoGithub size={30} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
