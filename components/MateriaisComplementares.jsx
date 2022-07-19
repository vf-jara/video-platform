import React from 'react'
import { Menu } from '@headlessui/react'
import { FolderOpen } from 'phosphor-react'

export default function MateriaisComplementares() {
    return (
        <div>
            <Menu>
                <Menu.Button>
                    <div className="p-4 md:w-2/3 my-4 text-sm bg-purple-is text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-is transition-colors">
                        <FolderOpen size={24} />
                        Materiais Complementares
                    </div>
                </Menu.Button>
            </Menu>
        </div>
    )
}
