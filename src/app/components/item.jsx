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
    <div className="border-solid border-2 border-red-100">
      <span ref={el} />
      {show ? (
        <div>
          <Image
            src="/image.jpeg"
            alt="jpeg"
            width={100}
            height={24}
            priority
          />
          <span ref={el} />
        </div>
      ) : (
        <Skeleton className="w-[100px] h-[20px] rounded-full text-white bg-white" />
      )}
    </div>
  );
}
