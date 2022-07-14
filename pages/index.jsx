import { getSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Header from "../components/Header";
import SliderPadrao from "../components/Slider";
import { homeInfo } from "../lib/api";

export default function Home({ session, courses }) {
    const router = useRouter();
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        setCursos(courses);
    }, [])
    return (
        <div className="bg-[#000303] pb-16">
            <div className="bg-home bg-top-center bg-no-repeat bg-cover">
                <Header />
                <div className="md:w-2/3 pt-32 md:pt-16 px-8 md:px-20 2xl:pb-20">
                    <h1 className="text-white font-bold text-5xl md:text-6xl pb-4">
                        As bases da IS
                    </h1>
                    <p className="text-white text-xl md:text-lg w-4/5 mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra condimentum justo, sed dapibus eros varius non. Ut condimentum porta ligula, at suscipit nibh dapibus a. In semper mauris sed eros blandit, a viverra diam interdum. Donec in ipsum mauris. Sed eu mi consequat, scelerisque erat eget, viverra diam.
                    </p>
                    <button className="text-base flex align-middle ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 text-white px-10 pt-[16px] pb-[17px] bg-orange-is hover:bg-white hover:text-orange-is justify-center rounded-md font-medium">
                        Assistir Agora
                        <svg className="w-5 h-5 ml-2 -mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="px-5 md:px-16 pt-16 w-full">
                    <h2 className="px-4 text-2xl font-bold text-white pb-7">Conteúdos Recentes</h2>
                    {cursos && (
                        <SliderPadrao cursos={cursos} />
                    )}
                </div>

            </div>

            <div className="pt-16 px-5 md:px-16 w-full">
                <h2 className="px-4 text-2xl font-bold text-white pb-7">Cursos Completos</h2>
                {cursos && (
                    <SliderPadrao cursos={cursos} />

                )}
            </div>

        </div>
    )
}

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    if (!session) {
        return {
            redirect: {
                destination: '/login?error=notauthorized'
            }
        }
    } else {
        const home = await homeInfo(session);
        return {
            props: {
                session,
                courses: home.data.courses.data,
                homepageInfo: home.data.homepage.data.attributes
            },
        }
    }
};
