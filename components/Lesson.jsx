import Link from "next/link"
import { Article, Headphones, MonitorPlay, Play } from "phosphor-react"


export default function Lesson() {

    return (
        <>
            <Link href="#" className="group">
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                    <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                        <MonitorPlay size={32} weight="bold" />
                    </div>
                    <div className="">
                        <strong className="text-gray-700 underline">
                            Conteúdo em Vídeo
                        </strong>
                    </div>
                </div>
            </Link>

            <Link href="#" className="group">
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                    <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                        <Headphones size={32} weight="fill" />
                    </div>

                    <strong className="block text-gray-700 underline">
                        Conteúdo em Áudio
                    </strong>
                </div>
            </Link>
            <Link href="#" className="group">
                <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                    <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                        <Article size={32} weight="fill" />
                    </div>

                    <strong className="block text-gray-700 underline">
                        Conteúdo em Artigo
                    </strong>
                </div>
            </Link>

        </>
    )
}