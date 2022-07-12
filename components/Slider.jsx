import React from "react";
import Img from "react-cool-img";
import Slider from "react-slick";

export default function SliderPadrão({
    cursos
}) {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
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
                    infinite: true,
                    adaptiveHeight: true

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
                    adaptiveHeight: true

                }
            },
        ]
    };
    return (
        <Slider {...settings}>
            <div className="px-3 outline-none">
                <Img
                    src="/assets/images/card1.png"
                />
            </div>
            <div className="px-3 outline-none">
                <Img
                    src="/assets/images/card2.png"
                />
            </div>
            <div className="px-3 outline-none">
                <Img
                    src="/assets/images/card1.png"
                />
            </div>
            <div className="px-3 outline-none">
                <Img
                    src="/assets/images/card2.png"
                />
            </div>
            <div className="px-3 outline-none">
                <Img
                    src="/assets/images/card1.png"
                />
            </div>
            <div className="px-3 outline-none">
                <Img
                    src="/assets/images/card2.png"
                />
            </div>
            <div className="px-3 outline-none">
                <Img
                    src="/assets/images/card1.png"
                />
            </div>
            <div className="px-3 outline-none">
                <Img
                    src="/assets/images/card2.png"
                />
            </div>
            <div className="px-3 outline-none">
                <Img
                    src="/assets/images/card1.png"
                />
            </div>
        </Slider>
    );
}