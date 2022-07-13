import { useEffect, useState } from "react";
import Header from "../components/Header";
import SliderPadrão from "../components/Slider";


export default function Home() {
    const [cursos, setCursos] = useState([])
    useEffect(() => {

    }, [])
    return (
        <div className="bg-[#121212] pb-16">

            <div className="bg-home bg-top-center bg-no-repeat bg-cover h-screen">
                <Header />
                <div className="container md:w-2/3 pt-32 px-20">
                    <h1 className="text-white font-bold text-8xl mb-8">
                        As bases da IS
                    </h1>
                    <p className="text-white text-xl w-4/5 mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra condimentum justo, sed dapibus eros varius non. Ut condimentum porta ligula, at suscipit nibh dapibus a. In semper mauris sed eros blandit, a viverra diam interdum. Donec in ipsum mauris. Sed eu mi consequat, scelerisque erat eget, viverra diam.
                    </p>
                    <a href="#" className="text-white px-10 pt-[16px] pb-[17px] bg-orange-is justify-center rounded-md font-medium">
                        Assistir Agora
                    </a>
                </div>

                <div className=" px-16 pt-20 w-full ">
                    <h2 className="px-4 text-2xl font-bold text-white pb-7">Conteúdos Recentes</h2>
                    <SliderPadrao cursos={cursos} />
                </div>

            </div>

            <div className="pt-40 px-16">
                <h2 className="px-4 text-2xl font-bold text-white pb-7">Cursos Completos</h2>
                <SliderPadrao cursos={cursos} />
            </div>

        </div>

    )
}
