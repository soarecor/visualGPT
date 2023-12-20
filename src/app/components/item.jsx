import React from "react";
import Typed from "typed.js";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

export default function Item({ t }) {
  const el = React.useRef(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      let typed = new Typed(el.current, {
        strings: [`<i>${t}</i> sentence.`],
        typeSpeed: 50,
      });
      setShow(true);
    }, 2000 * t);

    return () => {
      // Clear the timeout to avoid memory leaks
      clearTimeout(timeoutId);
    };
  }, [t, el]);

  return (
    <div className="m-4">
      {show ? (
        <div className="animate-fade-in">
          <img
            src="/image.jpeg"
            className={`transition-opacity ease-in-out delay-150`}
          />
          <span ref={el} />
        </div>
      ) : (
        <div className="h-[800px] min-h-[220px] flex items-center justify-center">
          <Skeleton className="w-[100px] h-[20px] rounded-full text-white bg-white" />
        </div>
      )}
      <span ref={el} className="mt-2" />
    </div>
  );
}
