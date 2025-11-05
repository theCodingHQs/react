import { useState } from "react";
import "./App.css";
import AddNumber from "./pages/add-a-number";
import TwoNumber from "./pages/add-two-number";
import Alphabets from "./pages/alphabets";
import Form from "./pages/form";
import Spaces from "./pages/spaces";

function App() {
  const [state, setState] = useState("");
  const [target, setTarget] = useState("-1"); // 1, 2 , 3 , 4

  const onSetTarget = () => {
    if (state == "1") {
      setTarget(1);
    }

    if (state == 2) {
      setTarget(2);
    }

    if (!Number(state) && !state.includes(" ")) {
      console.log("...", state);
      setTarget(3);
    }

    if (!Number(state) && state.includes(" ")) {
      setTarget(4);
    }
  };

  return (
    <>
      <Form value={state} setValue={setState} />
      ...{target}...
      <button type="button" onClick={onSetTarget}>
        Add
      </button>
      <div style={{ display: "flex", gap: "4px" }}>
        <AddNumber value={state} target={target} setTarget={setTarget} id={1} />
        <TwoNumber value={state} target={target} setTarget={setTarget} id={2} />
        <Alphabets value={state} target={target} setTarget={setTarget} id={3} />
        <Spaces value={state} target={target} id={4} />
      </div>
    </>
  );
}

export default App;
