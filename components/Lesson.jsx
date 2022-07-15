import Link from "next/link"
import { Article, Headphones, MonitorPlay, Play } from "phosphor-react"


export default function Lesson(lessons) {
    console.log("\n\n Lessons", lessons);
    return (
        <>
            {lessons.lessons !== [] && (
                lessons?.lessons?.map((lesson) => (
                    lesson?.lesson?.data?.attributes?.content[0]?.__typename === "ComponentContentsArticle" ? (
                        <Link href="#" className="group">
                            <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                                <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                                    <Article size={32} weight="fill" />
                                </div>

                                <strong className="block text-gray-700 underline">
                                    {lesson?.lesson?.data?.attributes?.title}
                                </strong>
                            </div>
                        </Link>
                    ) : lesson?.lesson?.data?.attributes?.content[0]?.__typename === "ComponentContentsVideoLocal" ? (
                        <Link href="#" className="group">
                            <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                                <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                                    <MonitorPlay size={32} weight="bold" />
                                </div>
                                <div className="">
                                    <strong className="text-gray-700 underline">
                                    {lesson?.lesson?.data?.attributes?.title}
                                    </strong>
                                </div>
                            </div>
                        </Link>
                    ) : lesson?.lesson?.data?.attributes?.content[0]?.__typename === "ComponentContentsVideoExternal" ? (
                        <Link href="#" className="group">
                            <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                                <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                                    <MonitorPlay size={32} weight="bold" />
                                </div>
                                <div className="">
                                    <strong className="text-gray-700 underline">
                                    {lesson?.lesson?.data?.attributes?.title}
                                    </strong>
                                </div>
                            </div>
                        </Link>
                    ) : lesson?.lesson?.data?.attributes?.content[0]?.__typename === "ComponentContentsImage" ? (
                        <Link href="#" className="group">
                            <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                                <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                                    <Article size={32} weight="fill" />
                                </div>

                                <strong className="block text-gray-700 underline">
                                {lesson?.lesson?.data?.attributes?.title}
                                </strong>
                            </div>
                        </Link>
                    ) : lesson?.lesson?.data?.attributes?.content[0]?.__typename === "ComponentContentsPdf" ? (
                        <Link href="#" className="group">
                            <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                                <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                                    <Article size={32} weight="fill" />
                                </div>

                                <strong className="block text-gray-700 underline">
                                {lesson?.lesson?.data?.attributes?.title}
                                </strong>
                            </div>
                        </Link>
                    ) : lesson?.lesson?.data?.attributes?.content[0]?.__typename === "ComponentContentsAudio" ? (
                        <Link href="#" className="group">
                            <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                                <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                                    <Article size={32} weight="fill" />
                                </div>

                                <strong className="block text-gray-700 underline">
                                {lesson?.lesson?.data?.attributes?.title}
                                </strong>
                            </div>
                        </Link>
                    ) : <Link href="#" className="group">
                            <div className="flex border rounded-md items-center gap-4 px-4 py-6 hover:border-orange-is">
                                <div className="rounded-full bg-orange-100 p-2 text-orange-is">
                                    <Article size={32} weight="fill" />
                                </div>

                                <strong className="block text-gray-700 underline">
                                {lesson?.lesson?.data?.attributes?.title}
                                </strong>
                            </div>
                        </Link>
                ))
            )}
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