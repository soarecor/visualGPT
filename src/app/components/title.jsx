import React from "react";
import Typed from "typed.js";

export default async function Title({ id }) {
  // Create reference to store the DOM element containing the animation
  const el1 = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el1.current, {
      strings: ["How to ollie on a snowboard"],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="mx-auto lg:w-[80%] lg:w-screen-lg text-left">
      <span ref={el1} className="text-xl md:text-3xl lg:text-5xl m-5" />
    </div>
  );
}
