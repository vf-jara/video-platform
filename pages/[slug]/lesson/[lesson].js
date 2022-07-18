import Sidebar from "../../../components/Sidebar";
import Video from "../../../components/Video";
import Article from "../../../components/Article";
import { useState } from "react";
import { List,X } from "phosphor-react";
import { cursoInfo, lessonInfo } from "../../../lib/api";
import { getSession } from "next-auth/react";

export default function Player({slug, curso, lesson, type}) {
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
            {
                type && (
                    type === "ComponentContentsVideoExternal" ? (
                        <Video content={lesson} type={type} course={curso} />
                    ) : type === "ComponentContentsVideoLocal" ? (
                        <Video content={lesson} type={type} course={curso} />
                    ) : type === "ComponentContentsArticle" ? (
                        <Article content={lesson} course={curso} />
                    ) : type === "ComponentContentsImage" ? (
                        <Article content={lesson} course={curso} />
                    ) : type === "ComponentContentsPdf" ? (
                        <Article content={lesson} course={curso} />
                    ) : type === "ComponentContentsAudio" ? (
                        <Video content={lesson} type={type} course={curso} />
                    ) : (
                        <></>
                    )
                )
            }
                <div className={`lg:flex absolute lg:static lg:z-auto lg:w-auto lg:h-auto ${open ? 'flex right-0 min-h-screen bg-white z-40' : 'hidden'} transition-all ease-in-out duration-500`}>
                    <Sidebar lessons={curso[0]?.attributes?.contents} course={slug} />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({req, query }){
    const {slug, lesson} = query;
    const session = await getSession({ req });
    if (!session) {
        return {
            redirect: {
                destination: '/login?error=notauthorized'
            }
        }
    } else {
        const course = await cursoInfo(session, slug);
        const l = await lessonInfo(session, lesson);
        return {
            props: {
                session,
                slug,
                curso: course?.data?.courses?.data || [],
                lesson: l?.data?.lessons?.data[0] || [],
                type: l?.data?.lessons?.data[0]?.attributes?.content[0]?.__typename || ""
            },
        }
    }
}