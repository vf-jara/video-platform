import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FolderOpen } from 'phosphor-react'
import Link from 'next/link'

export default function MateriaisComplementares(props) {

    const Links = [
        {
            name: "teste",
            link: "#",
            id: 1
        },
        {
            name: "teste",
            link: "#",
            id: 2
        },
        {
            name: "teste",
            link: "#",
            id: 3
        }
    ]
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div>
            <Menu as="div" className="relative">
                <div className="flex">
                    <Menu.Button className="p-4 my-4 text-sm bg-purple-is text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-is transition-colors">
                        <FolderOpen size={24} />
                        Materiais Complementares
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

                    <Menu.Items className="origin-top-right absolute w-40 rounded-md shadow-lg bg-blue-is dark:bg-gray-900  focus:outline-none">
                        <div className="py-1">
                            {
                                Links.map((link) => (
                                    <Menu.Item key={link.id}>
                                        {({ active }) => (
                                            <button className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white dark:text-white',
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
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
