import Link from "next/link"
import { Check, Play } from "phosphor-react"


export default function Lesson() {

    return (
        <>
            <Link href="#" className="group">

                <div className=" flex items-center gap-4 p-2 mt-2 group-hover:border group-hover:border-purple-is">
                    <div className="rounded-full bg-orange-is p-2 text-white">
                        <Check size={32} weight="bold" />
                    </div>
                    <div className="">
                        <strong className="text-gray-700 underline">
                            Título do Conteúdo
                        </strong>
                    </div>
                </div>
            </Link>

            <Link href="#" className="group">

                <div className=" flex items-center gap-4 p-2 mt-2 group-hover:border group-hover:border-purple-is">
                    <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                        <Play size={32} weight="fill" />
                    </div>

                    <strong className="block text-gray-700 underline">
                        Título do Conteúdo
                    </strong>
                </div>
            </Link>

        </>
    )
}