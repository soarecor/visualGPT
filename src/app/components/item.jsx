import React from "react";
import Typed from "typed.js";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import TypedContext from "./typed-context";

export default function Item({ id }) {
  const el = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const { typeId, setId } = React.useContext(TypedContext);

  const descriptions = {
    1: "Get up a bit of speed but not too much, then crouch down by bending at the knees and shift your weight onto your back leg. This will build up the energy (like pulling back a spring) for the ollie.",
    2: "Keeping your weight on the back foot, lift the nose off the ground and spring up off the tail.",
    3: "Whilst you are airborne shift your weight so that your weight is centred over the board and the board is level. Raise your knees towards your chest as you do this. Raising your knees helps to keep you compact and balanced and should give you a bit more hang time.",
    4: "Straighten your knees slightly before impact (but they should still be slightly bent) and land on both feet. Once you are comfortable landing on both feet you can try landing nose first then settling back in.",
  };

  React.useEffect(() => {
    if (id === typeId) {
      let typed = new Typed(el.current, {
        strings: [descriptions[id]],
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
          <img src={`/${id}.png`} className={`rounded-lg`} />
          <div className="mt-4">
            <span ref={el} />
          </div>
        </div>
      ) : (
        <div className="h-[600px] min-h-[220px] flex items-center justify-center">
          <Skeleton className="w-[100px] h-[10px] rounded-full text-white bg-white" />
        </div>
      )}
      <span ref={el} />
    </div>
  );
}
