import React from "react";
import Typed from "typed.js";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import TypedContext from "./typed-context";

export default function Item({ id }) {
  const el = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const { typeId, setId } = React.useContext(TypedContext);

  React.useEffect(() => {
    if (typeId === 0) setId(1);
    if (id === typeId) {
      let typed = new Typed(el.current, {
        strings: [
          `<i>${id}</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum`,
        ],
        typeSpeed: 50,
        showCursor: false,
        onComplete: function(self) {
          setId(id + 1);
        },
      });
      setShow(true);
    }

    return () => {
      // typed.destroy();
    };
  }, [el, id, typeId]);

  return (
    <div className="m-4">
      {show ? (
        <div className="animate-fade-in">
          <img
            src="/image.jpeg"
            className={`transition-opacity ease-in-out delay-150`}
          />
          <div className="mt-4">
            <span ref={el} />
          </div>
        </div>
      ) : (
        <div className="h-[800px] min-h-[220px] flex items-center justify-center">
          <Skeleton className="w-[100px] h-[10px] rounded-full text-white bg-white" />
        </div>
      )}
      <span ref={el} />
    </div>
  );
}
