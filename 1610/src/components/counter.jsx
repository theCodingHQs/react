import { useState } from "react";

const Counter = (props) => {
  const [state, setState] = useState(props.value);

  const onIncrease = () => {
    setState(state + 1);
  };

  const onDecrease = () => {
    setState(state - 1);
  };
  return (
    <div>
      <button onClick={onIncrease}>+</button>
      <span>{state}</span>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
