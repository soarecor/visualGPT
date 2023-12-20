import React from "react";
import Typed from "typed.js";
import Slider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./item";

export default function Carousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Slider
      className="border-solid border-2 border-sky-500 m-5"
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all 1"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="border-solid border-2 border-red-600">
        <Item t={1} />
      </div>
      <div className="border-solid border-2 border-red-600">
        <Item t={2} />
      </div>
      <div className="border-solid border-2 border-red-600">
        <Item t={3} />
      </div>
    </Slider>
  );
}
