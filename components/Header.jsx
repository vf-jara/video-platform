import Img from "react-cool-img";
import Link from 'next/link'
import { Fragment } from "react";
import { MagnifyingGlass, BellSimple, UserCircle } from "phosphor-react";
import { Menu, Transition } from '@headlessui/react'

export default function Header() {
    const Links = [
        { name: "Home", link: "/" },
        { name: "Cursos", link: "#cursos" },
        { name: "Podcasts", link: "#podcasts" },
        { name: "Artigos", link: "#artigos" },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

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
                <ul className="block space-x-5">
                    {
                        Links.map((link) => (
                            <li key={link.name} className="space-x-4 px-4 inline-block">
                                <Link href={link.link} className="">
                                    <a className=" link-underline link-underline-black hover:underline-offset-4 text-white text-base font-normal hover:transition-all transition-all ease-in-out delay-25">{link.name}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="mx-3">
                <BellSimple size={24} weight="fill" className="text-white hover:text-orange-is transition-all"  />
            </div>
            <div className="flex relative transition-all mx-3">
                <MagnifyingGlass size={24} className="absolute left-0 text-white hover:text-orange-is transition-all" />
                <input type="text" name="search" placeholder="" className="bg-transparent text-white w-10 z-0 focus:w-full transition-all focus:border-b delay-300 ring-0 outline-none pl-10">
                </input>
            </div>
            <div className="ml-3">
                <Menu as="div" className="relative">
                    <div className="flex">
                        <Menu.Button className="inline-flex justify-center w-full rounded-full border-2 border-orange-is shadow-sm bg-white text-gray-700 hover:bg-gray-100 focus:outline-none">
                            <UserCircle size={33} weight="light" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white focus:outline-none">
                            <div className="py-1">
                                <form method="POST" action="#">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block w-full text-left px-4 py-2 text-base text-center'
                                                )}
                                            >
                                                Sair
                                            </button>
                                        )}
                                    </Menu.Item>
                                </form>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}