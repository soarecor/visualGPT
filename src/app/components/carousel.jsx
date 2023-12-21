import React from "react";
import Typed from "typed.js";
import Slider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./item";
import TypedContext from "./typed-context";

export default function Carousel() {
  const [typeId, setId] = React.useState(0);
  const value = { typeId, setId };
  console.log(typeId);
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
    <TypedContext.Provider value={value}>
      <Slider
        className="lg:w-[80%] lg:w-screen-lg mx-auto"
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="">
          <Item id={1} />
        </div>
        <div className="">
          <Item id={2} />
        </div>
        <div className="">
          <Item id={3} />
        </div>
        <div className="">
          <Item id={4} />
        </div>
      </Slider>
    </TypedContext.Provider>
  );
}
