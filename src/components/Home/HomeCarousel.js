import Slider from "react-slick";
import { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home/HomeCarousel.css";

import {
  HomeSliderSlide,
  HomeSliderMain,
  HomeSliderImgContainer,
  HomeSliderImg,
  HomeSliderInfoContainer,
  HomeSliderInfoTitle,
  HomeSliderInfoDesc,
  HomeSliderInfoButton,
} from "../styles/Home/HomeCarousel.styled";
import { HotProductsItemLink } from "../styles/Home/HomeHotProducts.styled";

import HomeWaveShape from "./HomeWaveShape";

const HomeCarousel = ({ randomProducts }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "slides",
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <HomeSliderSlide id="slider-container">
      <Slider {...settings}>
        {randomProducts &&
          randomProducts.map((item) => {
            return (
              <Fragment key={item._id}>
                <HomeSliderMain>
                  <HomeSliderImgContainer>
                    <HomeSliderImg src={item.img} />
                  </HomeSliderImgContainer>

                  <HomeSliderInfoContainer>
                    <HomeSliderInfoTitle>{item.shortTitle}</HomeSliderInfoTitle>
                    <HomeSliderInfoDesc>{item.title}</HomeSliderInfoDesc>
                    <HotProductsItemLink
                      to={`/product/${item._id}`}
                      key={item._id}
                    >
                      <HomeSliderInfoButton>SHOW ME</HomeSliderInfoButton>
                    </HotProductsItemLink>
                  </HomeSliderInfoContainer>
                </HomeSliderMain>
              </Fragment>
            );
          })}
      </Slider>
      <HomeWaveShape direction="up" color="#1f96f4" />
      <HomeWaveShape direction="down" color="#F8E71C" />
    </HomeSliderSlide>
  );
};
export default HomeCarousel;
