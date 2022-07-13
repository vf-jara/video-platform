import Img from "react-cool-img";
import Link from 'next/link'
import { MagnifyingGlass, BellSimple, UserCircle } from "phosphor-react";

export default function Header() {
    const Links = [
        { name: "Home", link: "/" },
        { name: "Cursos", link: "#cursos" },
        { name: "Podcasts", link: "#podcasts" },
        { name: "Artigos", link: "#artigos" },
    ]
    return (
        <div className="px-20 py-5 w-full bg-gradient-to-b from-[rgb(18,18,18,0.5)] to-[rgb(18,18,18,0.01)] flex items-center">
            <div className="mr-10 flex-initial">
                <Link href="/">
                    <a>
                        <Img
                            src="/assets/images/logo-h.png"
                            alt="Logo IS com Ciência"
                        />
                    </a>
                </Link>
            </div>
            <div className="flex flex-grow">
                <ul className="flex pt-1">
                    {
                        Links.map((link) => (
                            <li key={link.name} className="pl-10 ">
                                <Link href={link.link} className="">
                                    <a className="text-white text-lg font-normal hover:text-xl hover:font-semibold transition-all ease-in-out delay-25">{link.name}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="mx-3">
                <BellSimple size={32} weight="light" className="text-white" />
            </div>
            <div className="flex relative transition-all mx-3">
                <MagnifyingGlass size={32} weight="light" className="absolute left-0 -bottom-1 transition-all text-white" />
                <input type="text" name="search" placeholder="" className="bg-transparent text-white w-10 z-0 focus:w-full transition-all focus:border-b delay-300 ring-0 outline-none pl-10">
                </input>
            </div>
            <div className="border rounded-full ml-3">
                <UserCircle size={32} weight="light" />
            </div>
        </div>
    )
}