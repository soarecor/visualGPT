"use client";
import React from "react";
import Typed from "typed.js";
import Carousel from "./components/carousel";
import Title from "./components/title";

export default async function CarouselPage() {
  return (
    <>
      <section className="h-screen grid align-center content-center mx-auto">
        <Title id={0} />
        <Carousel />
      </section>
    </>
  );
}
