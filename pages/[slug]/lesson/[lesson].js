import Sidebar from "../../../components/Sidebar";
import Video from "../../../components/Video";
import Article from "../../../components/Article";
import { useState } from "react";
import { List, X } from "phosphor-react";
import { cursoInfo, historico, lessonInfo } from "../../../lib/api";
import { getSession, signOut } from "next-auth/react";
import SidebarContext from "../../../context/SidebarContext";

export default function Player({ slug, curso, lesson, type, session, historico }) {
    const [open, setOpen] = useState(false);
    return (
        <SidebarContext.Provider
            value={{
                state: {
                    open: open
                },
                setOpen: setOpen
            }}>
            <div className="flex flex-col min-h-screen">
                <div className="absolute z-50 top-3 right-4 lg:hidden">
                    <button onClick={(e) => {e.preventDefault(); setOpen(!open)}}>
                        {
                            !open ?
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
                                <Video content={lesson} type={type} course={curso} session={session} />
                            ) : type === "ComponentContentsVideoLocal" ? (
                                <Video content={lesson} type={type} course={curso} session={session} />
                            ) : type === "ComponentContentsArticle" ? (
                                <Article content={lesson} course={curso} session={session} />
                            ) : type === "ComponentContentsImage" ? (
                                <Article content={lesson} course={curso} session={session} />
                            ) : type === "ComponentContentsPdf" ? (
                                <Article content={lesson} course={curso} session={session} />
                            ) : type === "ComponentContentsAudio" ? (
                                <Video content={lesson} type={type} course={curso} session={session} />
                            ) : (
                                <></>
                            )
                        )
                    }
                    <div className={`lg:flex absolute lg:static lg:z-auto lg:w-auto lg:h-auto ${open ? 'flex right-0 min-h-screen bg-white z-40' : 'hidden'} transition-all ease-in-out duration-500`}>
                        <Sidebar lessons={curso[0]?.attributes?.contents} course={slug} courseId={curso[0].id} session={session} historico={historico} />
                    </div>
                </div>
            </div>
        </SidebarContext.Provider>
    )
}

export async function getServerSideProps({ req, query }) {
    const { slug, lesson } = query;
    const session = await getSession({ req });
    let d1 = new Date();
    let d2 = new Date(session.expires);
    if (d1 > d2) {
        signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_API_URL}/login?error=notauthorized` })
    }
    if (!session) {
        return {
            redirect: {
                destination: '/login?error=notauthorized'
            }
        }
    } else {
        if (!session?.user?.subscriptionActive) {
            return {
                redirect: {
                    destination: '/'
                }
            }
        }
        const course = await cursoInfo(session, slug);
        const l = await lessonInfo(session, lesson);
        let arrHistorico = [];
        await historico(session, course?.data?.courses?.data[0]?.id).then((hist) => {
            hist?.map((h) => {
                arrHistorico.push(h?.attributes?.lesson?.data?.id);
            });
        });
        return {
            props: {
                session,
                slug,
                historico: arrHistorico,
                curso: course?.data?.courses?.data || [],
                lesson: l?.data?.lessons?.data[0] || [],
                type: l?.data?.lessons?.data[0]?.attributes?.content[0]?.__typename || ""
            },
        }
    }
}