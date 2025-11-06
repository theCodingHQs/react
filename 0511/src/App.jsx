import { useState } from "react";
import "./App.css";
import AddNumber from "./pages/add-a-number";
import TwoNumber from "./pages/add-two-number";
import Alphabets from "./pages/alphabets";
import Form from "./pages/form";
import Spaces from "./pages/spaces";

function App() {
  const [state, setState] = useState("");
  const [target, setTarget] = useState("-1"); // add-1, add-2 , alphabets , spaces

  const onSetTarget = () => {
    if (state == "1") {
      setTarget("add-1");
    }

    if (state == 2) {
      setTarget("add-2");
    }

    if (!Number(state) && !state.includes(" ")) {
      console.log("...", state);
      setTarget("alphabets");
    }

    if (!Number(state) && state.includes(" ")) {
      setTarget("spaces");
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
        <AddNumber
          value={state}
          target={target}
          setTarget={setTarget}
          id={"add-1"}
        />
        <TwoNumber
          value={state}
          target={target}
          setTarget={setTarget}
          id={"add-2"}
        />
        <Alphabets
          value={state}
          target={target}
          setTarget={setTarget}
          id={"alphabets"}
        />
        <Spaces
          value={state}
          target={target}
          setTarget={setTarget}
          id={"spaces"}
        />
      </div>
    </>
  );
}

export default App;
