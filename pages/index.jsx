import { getSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Header from "../components/Header";
import SliderPadrao from "../components/Slider";
import { homeInfo } from "../lib/api";

export default function Home({session, courses}) {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
      setCursos(courses);
    }, [])
    return (
        <div className="bg-[#000303] pb-16">

            <div className="bg-home bg-top-center bg-no-repeat bg-cover min-h-screen">
                <Header />
                <div className="md:w-2/3 pt-32 px-8 md:px-20 2xl:pb-20">
                    <h1 className="text-white font-bold text-5xl md:text-8xl pb-8">
                        As bases da IS
                    </h1>
                    <p className="text-white text-xl w-4/5 mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra condimentum justo, sed dapibus eros varius non. Ut condimentum porta ligula, at suscipit nibh dapibus a. In semper mauris sed eros blandit, a viverra diam interdum. Donec in ipsum mauris. Sed eu mi consequat, scelerisque erat eget, viverra diam.
                    </p>
                    <a href="#" className="text-white px-10 pt-[16px] pb-[17px] bg-orange-is hover:bg-orange-hv-is transition-colors justify-center rounded-md font-medium">
                        Assistir Agora
                    </a>
                </div>

                <div className="px-5 md:px-16 pt-20 w-full">
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
    if(!session){
      return{
        redirect: {
          destination: '/login?error=notauthorized'
        }
      }
    }else{
      const courses = await homeInfo(session);
      return {
        props: {
          session,
          courses: courses.data.courses.data
        },
      }
    }
  };