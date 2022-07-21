import Link from "next/link";
import React, { useState } from "react";
import Img from "react-cool-img";
import Slider from "react-slick";
import { Play, X } from "phosphor-react";

export default function SliderPadrao({ cursos }) {
    const [modalOpen, setOpen] = useState(false)
    const [click, setClick] = useState(false)
    const [info, setInfo] = useState({ title: '', description: '', link: '', image: '' })
    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        centerMode: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                    adaptiveHeight: true,
                    centerMode: false

                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true

                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true,
                    centerMode: true,
                    centerPadding: '20%',

                }
            },
        ]
    };
    function abrirModal(title, description, link, image) {
        setClick(true);
        setInfo({
            title,
            description,
            link,
            image
        })
        setOpen(true);
    }
    return (
        <>
            <Slider {...settings}>
                {cursos?.map((curso) => (
                    <div key={curso.id} >
                            <div className="px-3 outline-none cursor-pointer" onClick={() => abrirModal(curso.attributes.title, curso.attributes.description, curso.attributes.slug, curso?.attributes?.coverV?.data?.attributes?.url)}>
                                <Img className="rounded-lg card-course"
                                    src={curso?.attributes?.coverV?.data?.attributes?.url}
                                />
                            </div>
                    </div>
                ))}
            </Slider>
            <div id="modal-course" className={`fixed lg:p-10 top-0 left-0 bottom-0 right-0 w-full h-full flex items-end md:items-center md:justify-center ${modalOpen ? 'fadeInModal' : 'fadeOutModal'} ${!click ? 'hidden' : ''} backdrop-blur`}>
                <div className="bg-zinc-900 rounded-lg p-6 relative min-w-[50%] max-w-3xl">
                    <button onClick={() => setOpen(!modalOpen)} className="absolute top-5 right-5 text-white">
                        <X size={30} weight="bold" className="" />
                    </button>
                    <div className="flex gap-x-3 md:gap-x-10 py-5">
                        <div className="min-w-[100px] max-w-[150px]">
                            <Img className="object-contain"
                                src={info?.image}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <h2 className="text-lg md:text-3xl text-white mb-3">{info?.title}</h2>
                            <p className="text-white opacity-75 text-sm md:text-lg mb-8">{info?.description}</p>
                            <Link href={`/${info?.link}`}>
                                <a>
                                    <div className="p-4 flex text-white text-lg rounded-lg gap-3 bg-orange-is hover:bg-orange-hv-is transition-colors lg:w-2/5 justify-center">
                                        <p>Assistir</p>
                                        <Play size={24} weight="fill"/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
