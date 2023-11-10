"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { GrNext } from "react-icons/gr";

import Card, { typeThisIs } from "../card/Card";
import Loading from "@/app/browse/loading";

interface Props {
  movies: [];
  titleSection?: string;
  thisIs: typeThisIs;
}
const MovieCarousel: React.FC<Props> = ({ movies, titleSection, thisIs }) => {
  const [isCarouselLoaded, setIsCarouselLoaded] = useState(false);

  const handleCarouselLoad = () => {
    setIsCarouselLoaded(true);
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 200,
    arrows: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    onReInit: handleCarouselLoad,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          autoplay: false,
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          autoplay: false,
          arrows: false,

          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          autoplay: false,
          arrows: false,

          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className={`mb-10  fadeIn flex-col items-center ${
        isCarouselLoaded ? "flex" : "hidden"
      } `}
    >
      <div className="relative fadeIn px-6 mb-2 w-full ">
        <h3 className=" text-neutral-200 text-xl flex items-center ">
          {titleSection}
        </h3>
      </div>

      <div className={`  w-[calc(100vw-1vw)] flex flex-col items-center`}>
        <Slider className=" w-full px-4  " {...settings}>
          {movies.map((m: any, i: number) => (
            <Card thisIs={thisIs} key={i} movie={m} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieCarousel;
