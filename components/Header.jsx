import Img from "react-cool-img";
import Link from 'next/link'
import { Fragment, useEffect, useState } from "react";
import { MagnifyingGlass, BellSimple, UserCircle, List, SignOut } from "phosphor-react";
import { Menu, Transition } from '@headlessui/react'

export default function Header({name, email}) {
    const [alertNotification, setAlertNotification] = useState(0);
    const Links = [
        { name: "Home", link: "/", id: 1 },
        // { name: "Cursos", link: "#cursos" },
        // { name: "Podcasts", link: "#podcasts" },
        // { name: "Artigos", link: "#artigos" },
    ];

    const accountMenu = [
        { text: "Minha Conta", link: "#", id: 1, icon: ''},
        { text: "Sair", link: "/", id: 2, icon: <SignOut className="ml-2" size={22} color="red" />},
    ];

    const notifications = [
        {id: 1, title: "título", message: "Aqui vai a notificação.", readed: true},
        {id: 2, title: "título", message: "Aqui vai a notificação.", readed: false},
        {id: 3, title: "título", message: "Aqui vai a notificação.", readed: false},
    ]

    useEffect(() => {
        var qtd = notifications.filter(checkNotification);
        setAlertNotification(qtd.length);
        console.log("notificações:", alertNotification)
    },[notifications])

    function checkNotification(n) {
        return n.readed === false;
      }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            {
                //MENU MOBILE
            }
            <div className="md:hidden">
                <div className="px-8 py-5 w-full bg-gradient-to-b from-[rgb(18,18,18,0.5)] to-[rgb(18,18,18,0.01)] flex">
                    <div className="mr-10 flex-grow">
                        <Link href="/">
                            <a>
                                <Img
                                    src="/assets/images/logo-h.png"
                                    alt="Logo IS com Ciência"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="ml-3">
                        <Menu as="div" className="relative">
                            <div className="flex">
                                <Menu.Button className="inline-flex justify-center w-full rounded-full shadow-sm text-white focus:outline-none">
                                    <List size={35} weight="bold" />
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
                                        {
                                            Links.map((link) => (
                                                <Menu.Item key={link.id}>
                                                    {({ active }) => (
                                                        <button className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block w-full px-4 py-2 text-base text-center'
                                                        )}>
                                                            <Link href={link.link}>
                                                                <a>{link.name}</a>
                                                            </Link>
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            ))
                                        }
                                        <hr className="w-4/5 m-auto"></hr>
                                        <form method="POST" action="#">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        type="submit"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block w-full px-4 py-2 text-base text-center'
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
            </div>


            {
                //MENU DESKTOP
            }
            <div className="hidden md:block">
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
                    <div className="flex flex-grow 2xl:pl-14">
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
                    <div className="flex relative transition-all">
                        <MagnifyingGlass size={24} className="absolute left-0 text-white hover:text-orange-is transition-all" />
                        <input type="text" name="search" placeholder="" className="bg-transparent text-white w-10 z-0 focus:w-full transition-all focus:border-b delay-300 ring-0 outline-none pl-10">
                        </input>
                    </div>
                    <div className="mx-3">
                        {/* <BellSimple size={24} weight="fill" className="text-white hover:text-orange-is transition-all" /> */}
                        <Menu as="div" className="relative">
                            <div className="flex">
                                <Menu.Button className="inline-flex justify-center w-full p-1 rounded-full shadow-sm text-white hover:bg-gray-100 hover:text-orange-is focus:outline-none transition-all delay-50">
                                    <BellSimple size={24} weight="fill" />
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
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white dark:bg-gray-900 dark:text-white focus:outline-none">
                                    <div className="py-1 px-2">
                                    {
                                        notifications.map((notify) => (
                                            <Menu.Item key={notify.id}>
                                                {({ active }) => (
                                                    <div
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-white ',
                                                            'flex align-middle w-full px-4 py-2 text-base text-left rounded-md transition-all mb-2 last:mb-0 cursor-pointer'
                                                        )}
                                                    >
                                                        <span className={`${notify.readed ? 'text-white bg-green-500' : 'border-2'} w-5 h-5 mr-4 flex my-auto items-center p-1 text-sm font-semibold rounded-full` }>
                                                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                        </span>
                                                        <div className="block">
                                                            <h3 className="text-base font-bold">{notify.title}</h3>
                                                            <p className="text-sm">{notify.message}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        ))
                                    }
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
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
                                <Menu.Items className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-900 focus:outline-none dark:text-white">
                                    <div className="py-2 px-2">
                                        <div className="py-2 px-2 text-sm text-gray-900 dark:text-white">
                                            <div className="font-bold text-base capitalize">{name}</div>
                                            <div className="font-medium truncate text-sm">{email}</div>
                                        </div>
                                        <hr className="bg-white mx-1 my-2"/>
                                        {
                                            accountMenu.map((link) => (
                                                <Menu.Item key={link.id}>
                                                {({ active }) => (
                                                    <button
                                                        type="submit"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-white ',
                                                            'inline-flex justify-center w-full px-4 py-2 text-base text-center rounded-md transition-all mb-2 last:mb-0'
                                                        )}
                                                    >
                                                        {link.text}{" "}{link.icon}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            ))
                                        }
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>


            </div>

        </>

    )
}