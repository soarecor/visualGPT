"use client";
import React from "react";
import Typed from "typed.js";
import Carousel from "./components/carousel";

export default async function CarouselPage() {
  // Create reference to store the DOM element containing the animation

  const el1 = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el1.current, {
      strings: ["<i>First</i> sentence."],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="h-screen grid align-center content-center mx-auto">
        <div className="mx-auto lg:w-[80%] lg:w-screen-lg text-left">
          <span ref={el1} className="text-5xl m-5" />
        </div>

        <Carousel />
      </section>
    </>
  );
}
