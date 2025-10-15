import { useState } from "react";

function App(props) {
  const [num, setNum] = useState(props.initNum);

  const increase = () => {
    const n = num + 1;
    setNum(n);
  };

  const decrease = () => {
    const n = num - 1;
    setNum(n);
  };

  return (
    <div>
      <button onClick={increase}>+</button>

      {num}

      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
