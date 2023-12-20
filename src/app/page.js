"use client";
import React from "react";
import Typed from "typed.js";
import Carousel from "./components/carousel";

async function getTitle() {
  // returns Title on character as a whole string.
}

async function getImages() {
  // returns the image object
  // the image object looks like this
  // {
  //   id: '1',
  //   url: 'something',
  //   text: 'something'
  // }
}

export default async function CarouselPage() {
  // Create reference to store the DOM element containing the animation
  const el1 = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el1.current, {
      strings: ["<i>First</i> sentence."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="App">
        <span ref={el1} className="text-5xl m-5" />
      </div>
      <Carousel />
    </>
  );
}
