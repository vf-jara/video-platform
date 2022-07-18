import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import { useState } from "react";
import { List,X } from "phosphor-react";
import { cursoInfo, getPaths } from "../lib/api";
import { getSession } from "next-auth/react";

export default function Player({slug, curso}) {
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
                    <Sidebar lessons={curso[0]?.attributes?.contents} course={slug} />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({req, query }){
    const {slug} = query;
    const session = await getSession({ req });
    if (!session) {
        return {
            redirect: {
                destination: '/login?error=notauthorized'
            }
        }
    } else {
        const course = await cursoInfo(session, slug);
        return {
            props: {
                session,
                slug,
                curso: course?.data?.courses?.data || []
            },
        }
    }
}

// export async function getStaticPaths(){
//     const home = await getPaths();
//     const paths = home?.data?.courses?.data.map((course) => ({
//         params: {
//           slug: course?.attributes?.slug,
//         },
//       }))

//     return {
//         paths: paths,
//         fallback: "blocking"
//       };
// }