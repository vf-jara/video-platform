
import { FolderOpen } from "phosphor-react";
import Link from "next/link";
import Img from "react-cool-img";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css"
import React, { useRef } from "react";
import MateriaisComplementares from "./MateriaisComplementares";


export default function Video({ content, type, course }) {
    const playerRef = useRef();
    let plyrProps;
    if (type === "ComponentContentsVideoExternal") {
        plyrProps = {
            source: {
                type: "video",
                sources: [
                    {
                        src: content?.attributes?.content[0]?.url,
                        provider: content?.attributes?.content[0]?.url.includes("youtube") ? "youtube" : content?.attributes?.content[0]?.url.includes("vimeo") ? "vimeo" : ""
                    }
                ],
                ratio: "16:9"
            }
        }
    } else if (type === "ComponentContentsVideoLocal") {
        plyrProps = {
            source: {
                type: "video",
                title: content?.attributes?.title,
                sources: [
                    {
                        src: content?.attributes?.content[0]?.file?.data?.attributes?.url,
                        type: content?.attributes?.content[0]?.file?.data?.attributes?.mime,
                        size: 720,
                    },
                    {
                        src: content?.attributes?.content[0]?.file?.data?.attributes?.url,
                        type: content?.attributes?.content[0]?.file?.data?.attributes?.mime,
                        size: 1080,
                    },
                ],
                poster: course[0]?.attributes?.thumbnailH?.data?.attributes?.url,
            }
        }
    } else if (type === "ComponentContentsAudio") {
        plyrProps = {
            source: {
                type: "audio",
                title: content?.attributes?.title,
                sources: [
                    {
                        src: content?.attributes?.content[0]?.file?.data?.attributes?.url,
                        type: content?.attributes?.content[0]?.file?.data?.attributes?.mime,
                    }
                ]
            }
        }
    }
    const options = {
        controls: [
            "play-large",
            "rewind",
            "play",
            "fast-forward",
            "progress",
            "current-time",
            "duration",
            "mute",
            "volume",
            "settings",
            "pip",
            "airplay",
            "fullscreen"
        ]
    };
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
                    {course[0]?.attributes?.title}
                </div>
            </div>
            <div className="bg-slate-100 flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Plyr ref={playerRef} {...plyrProps} options={options} />

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
                            <div className="flex md:justify-end">
                                <MateriaisComplementares />
                            </div>

                        </div>

                        <p className="text-gray-700 mt-4 leading-relaxed">
                            {content?.attributes?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}