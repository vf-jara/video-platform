import Link from "next/link";
import React from "react";
import Img from "react-cool-img";
import Slider from "react-slick";

export default function SliderPadrao({cursos}) {
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
    return (
        <Slider {...settings}>
        {cursos?.map((curso) => (
            <Link href={`/${curso.attributes.slug}`} key={curso.attributes.id}>
                <a>
                    <div className="px-3 outline-none">
                        <Img className="rounded-lg"
                            src={curso?.attributes?.coverV?.data?.attributes?.url}
                        />
                    </div>
                </a>
            </Link>
        ))}
        </Slider>
    );
}
