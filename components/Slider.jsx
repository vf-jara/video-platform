import Link from "next/link";
import React, { useContext, useState } from "react";
import Img from "react-cool-img";
import Slider from "react-slick";
import { ArrowRight, Lock, Play, X } from "phosphor-react";
import ProductContext from "../context/ProductContext";

export default function SliderPadrao({ cursos }) {
  const [productVerify, setProductVerify] = useState(false);
  const [modalOpen, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [info, setInfo] = useState({
    title: "",
    description: "",
    link: "",
    image: "",
    product: false
  });
  const value = useContext(ProductContext);
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
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          adaptiveHeight: true,
        },
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
          centerPadding: "20%",
        },
      },
    ],
  };
  function abrirModal(title, description, link, image, products) {
    let v = products.filter(e => value.state.userProducts.includes(parseInt(e.id)))
    setClick(true);
    setInfo({
      title,
      description,
      link,
      image,
      product: v.length !==  0 ? true : false
    });
    setOpen(true);
  }
  function verifica(p) {
    let v = p.filter(e => value.state.userProducts.includes(parseInt(e.id)))
    if(v.length !== 0){
        return true;
    }else{
        return false;
    }
  }
  return (
    <>
      <Slider {...settings}>
        {value?.state?.courses?.map((curso) => (
                <div key={curso.id}>
                  <div
                    className="px-3 outline-none cursor-pointer relative card-course"
                    onClick={() =>
                      abrirModal(
                        curso.attributes.title,
                        curso.attributes.description,
                        curso.attributes.slug,
                        curso?.attributes?.coverV?.data?.attributes?.url,
                        curso?.attributes?.products.data
                      )
                    }
                  >
                    <Img
                      className={`rounded-lg  ${!verifica(curso?.attributes?.products.data) ? 'lock-bg' : ''}`}
                      src={curso?.attributes?.coverV?.data?.attributes?.url}
                    />
                    {!verifica(curso?.attributes?.products.data) ? (
                        <Lock size={72} color="rgb(17,24,39)" weight="bold" className="absolute lock-icon cursor-pointer" />
                    ):(<></>)}
                  </div>
                </div>

        ))}
      </Slider>
      <div
        id="modal-course"
        className={`fixed lg:p-10 top-0 left-0 bottom-0  right-0 justify-center w-full h-full flex items-end md:items-center md:justify-center ${
          modalOpen ? "fadeInModal" : "fadeOutModal"
        } ${!click ? "hidden" : ""} lg:backdrop-blur`}
      >
        <div className="dark:bg-gray-900 bg-slate-50 rounded-sm p-6 relative min-w-[50%] max-w-3xl">
          <button
            onClick={() => setOpen(!modalOpen)}
            className="absolute top-5 right-5 text-zinc-800 dark:text-white"
          >
            <X size={30} weight="bold" className="" />
          </button>
          <div className="flex gap-x-3 md:gap-x-10 py-5">
            <div className="min-w-[100px] max-w-[150px]">
              <Img className="object-contain" src={info?.image} />
            </div>
            <div className="flex flex-col w-full">
              <h2 className="text-lg md:text-3xl text-zinc-900 dark:text-white mb-3">
                {info?.title}
              </h2>
              <p className="text-zinc-900 dark:text-white opacity-75 text-sm md:text-lg mb-8">
                {info?.description}
              </p>
            </div>
          </div>
          <div className="">
          {info.product ? (
            <Link href={`/${info?.link}`}>
                <a>
                    <div className="p-4 flex text-white text-base rounded-lg gap-3 bg-orange-is hover:bg-orange-hv-is transition-colors lg:w-2/5 justify-center items-center">
                        <p>Ver conteúdo</p>
                        <ArrowRight size={20} weight="bold" />
                    </div>
                </a>
            </Link>
            ) : (
                <button disabled className="p-4 flex text-white text-base rounded-lg gap-3 bg-orange-is hover:bg-orange-hv-is transition-colors lg:w-2/5 justify-center items-center">
                    <p>Você não tem acesso à esse conteúdo!</p>
                </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
