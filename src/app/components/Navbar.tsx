import Link from "next/link";
type Props = {};

export default function Navbar(props: Props) {
    return (
        <nav className="flex flex-nowrap items-center justify-between shadow-md sticky top-0">
            <div className="text-2xl font-bold mx-12 my-6">
                <Link href="/">al.dev</Link>
            </div>
            <ul className="flex items-center justify-between gap-6 mr-12 text-lg [&>li]:font-semibold">
                <li className="">
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#projects">Projects</Link>
                </li>
                <li>
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
