import { Checks } from 'phosphor-react'
import React from 'react'

export default function MarkAsViewed() {
    return (
        <div className="flex">
            <button className="p-4 text-sm ring-inset text-purple-is border-2 border-purple-is flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purple-is hover:text-white transition-colors">
                <Checks size={24} />
                Marcar como Visto
            </button>
        </div>
    )
}
