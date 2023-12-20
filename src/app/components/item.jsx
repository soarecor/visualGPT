import React from "react";
import Typed from "typed.js";

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
      console.log("shw", show);
    }, 1000 * t);

    return () => {
      // Clear the timeout to avoid memory leaks
      clearTimeout(timeoutId);
    };
  }, [t, el]);

  return (
    <div className="border-solid border-2 border-red-100">
      <span ref={el} />
      {show ? <span ref={el} /> : <span>"...."</span>}
    </div>
  );
}
