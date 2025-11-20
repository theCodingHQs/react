import React, { useEffect, useRef, useState } from "react";

const UseEffect = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);

  const buttonRef = useRef();

  const myFunc = () => {
    console.log(buttonRef.current);
  };

  useEffect(() => {
    myFunc();
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        className="p-4 bg-blue-600 m-10 text-white"
        onClick={() => setState(state + 1)}
      >
        {state}
      </button>
      <button
        className="p-4 bg-blue-600 m-10 text-white"
        onClick={() => setState2(state2 + 1)}
      >
        {state2}
      </button>
      <button
        className="p-4 bg-blue-600 m-10 text-white"
        onClick={() => setState3(state3 + 1)}
      >
        {state3}
      </button>
    </div>
  );
};

export default UseEffect;
