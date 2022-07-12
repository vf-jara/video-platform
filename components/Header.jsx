import Img from "react-cool-img";
import Link from 'next/link'

export default function Header() {
    const Links = [
        { name: "Home", link: "/" },
        { name: "Cursos", link: "#cursos" },
        { name: "Podcasts", link: "#podcasts" },
        { name: "Artigos", link: "#artigos" },
    ]
    return (
        <div className="px-20 py-5 w-full bg-gradient-to-b from-[rgb(18,18,18,0.5)] to-[rgb(18,18,18,0.01)] flex">
            <div className="mr-10">
                <Link href="/">
                    <a>
                        <Img
                            src="/assets/images/logo-h.png"
                            alt="Logo IS com Ciência"
                        />
                    </a>
                </Link>
            </div>
            <div>
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
            <div>

            </div>
        </div>
    )
}