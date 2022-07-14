import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import { useState } from "react";
import { List,X } from "phosphor-react";

export default function Player() {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex flex-col min-h-screen">
            <div className="absolute z-50 top-3 right-4 lg:hidden">
                <button onClick={() => setOpen(!open)}>
                {
                    !open? 
                    <List
                        size={34}
                        className="text-white"
                        weight="bold"
                    />
                    :
                    <X
                        size={34}
                        className="text-white"
                        weight="bold"
                    />

                }
                </button>
            </div>
            <div className="flex flex-1">
                <Video />
                <div className={`lg:flex absolute lg:static lg:z-auto lg:w-auto lg:h-auto ${open ? 'flex right-0 min-h-screen bg-white z-40' : 'hidden'} transition-all ease-in-out duration-500`}>
                    <Sidebar />

                </div>
            </div>
        </div>
    )
}