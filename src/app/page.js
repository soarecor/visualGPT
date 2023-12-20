"use client";
import Image from "next/image";
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
  // <Image
  //   src="/vercel.svg"
  //   alt="Vercel Logo"
  //   className="dark:invert"
  //   width={100}
  //   height={24}
  //   priority
  // />

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
        <span ref={el1} />
      </div>
      <Carousel />
    </>
  );
}
