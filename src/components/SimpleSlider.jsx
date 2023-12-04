import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderSlide from "./SliderSlide";
import { sliderData } from "../data";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
          {sliderData.map(obj=><SliderSlide n={obj.n} h1={obj.h1} h2={obj.h2} p={obj.p} p2={obj.p2}/>)}
        </Slider>
    );
  }
}