import Link from "next/link";
import { FolderOpen } from "phosphor-react";
import Img from "react-cool-img";
import dynamic from 'next/dynamic';
import MateriaisComplementares from "./MateriaisComplementares";
import MarkAsViewed from "./MarkAsViewed";



export default function Article({ content, course }) {

    const Output = dynamic(
        async () => (await import('editorjs-react-renderer')).default,
        { ssr: false }
    );

    return (
        <div className="flex-1 bg-slate-100">
            <div className="flex">
                <div className="py-5 bg-purple-is">
                    <Link href="/">
                        <a>
                            <Img
                                src="/assets/images/logo-h.png"
                                alt="Logo IS com Ciência"
                                className="max-h-5 md:max-h-full mx-4"
                            />
                        </a>
                    </Link>
                </div>
                <div className="bg-green-is flex flex-1 items-center pl-5 text-white font-bold">
                    {course[0]?.attributes?.title}
                </div>
            </div>
            <div className="p-8 max-w-[1100px] bg-white mx-auto shadow-lg">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex items-center">
                                <h1 className="text-2xl text-gray-700 font-bold">
                                    {content?.attributes?.title}
                                </h1>
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 my-4 md:justify-end">
                                <MarkAsViewed />
                                <MateriaisComplementares />
                            </div>
                        </div>
                        <div className="article-view">
                            <Output data={JSON.parse(content?.attributes?.content[0]?.content)} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}