import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { List,X } from "phosphor-react";
import { cursoInfo, lessonHistoric } from "../../lib/api";
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
        if(!session?.user?.subscriptionActive){
            return {
                redirect: {
                    destination: '/'
                }
            }
        }
        const course = await cursoInfo(session, slug);
        let conteudoEnviado = '';
        const conteudos = course?.data?.courses?.data[0]?.attributes?.contents;
        let verifica = false;
        for (const conteudo of conteudos) {
            let h = await lessonHistoric(session, conteudo?.lesson?.data?.id, course?.data?.courses?.data[0]?.id);
            if(h?.data?.lessonHistorics?.meta?.pagination?.total === 0){
                console.log("H: ", h?.data?.lessonHistorics?.meta?.pagination?.total );
                console.log("\nNão tem histórico\n");
                verifica = true;
                conteudoEnviado = conteudo?.lesson?.data?.attributes?.slug;
                break;
            }else{
                continue;
            }
        }
        if(verifica){
            return {
                redirect: {
                    destination: `/${slug}/lesson/${conteudoEnviado}`
                }
            }
        }else{
            return {
                redirect: {
                    destination: `/${slug}/lesson/${conteudos[0]?.lesson?.data?.attributes?.slug}`
                }
            }
        }

    }
}