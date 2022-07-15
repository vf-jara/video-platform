
import { FolderOpen } from "phosphor-react";
import Link from "next/link";
import Img from "react-cool-img";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"


export default function Video() {
    const plyrProps = {
        source: {
            type: "video",
            sources: [
                {
                    src: "10wb6KbdvLI",
                    provider: "youtube"
                }
            ]
        }
    }

    return (
        <div className="flex-1 bg-slate-100">
            <div className="flex">
                <div className="py-5 px-7 bg-purple-is">
                    <Link href="/">
                        <a>
                            <Img
                                src="/assets/images/logo-h.png"
                                alt="Logo IS com Ciência"
                                className="w-1/2 md:w-auto"
                            />
                        </a>
                    </Link>
                </div>
                <div className="bg-green-is flex flex-1 items-center pl-5 text-white font-bold">
                    Título do Conteúdo
                </div>
            </div>
            <div className="bg-slate-100 flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Plyr {...plyrProps}/>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] bg-white mx-auto shadow-lg">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex items-center">
                                <h1 className="text-2xl text-gray-700 font-bold">
                                    Lesson Title
                                </h1>
                            </div>
                            <div className="flex md:justify-end">
                                <a href="" className="p-4 md:w-2/3 my-4 text-sm bg-purple-is text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-is transition-colors">
                                    <FolderOpen size={24} />
                                    Materiais Complementares
                                </a>
                            </div>

                        </div>

                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu scelerisque nulla. Aliquam erat volutpat. Nam lorem justo, dignissim non est quis, lobortis lacinia lectus. Nunc aliquam massa vitae tortor maximus vestibulum. Praesent sodales lacinia magna. Etiam non varius enim, ut iaculis diam. Suspendisse at ipsum hendrerit diam auctor ornare. Maecenas vel semper felis. Etiam arcu velit, efficitur imperdiet elementum in, vehicula sit amet orci. Vivamus interdum urna ac odio bibendum pellentesque. Quisque rhoncus lorem varius purus porta vulputate. Proin viverra tortor et nisl tristique fermentum. Maecenas ante lacus, gravida sit amet iaculis quis, cursus id lacus. Sed a congue odio, nec euismod lacus.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}