import React from "react";
import Img from "react-cool-img";
import Slider from "react-slick";

export default function SliderPadrao({
    cursos
}) {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: false,
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
