import { useState } from "react";
import Main from "./components/pages/main";
import Navbar from "./components/pages/navbar";

function App() {
  const user = {
    name: "Rohit",
    surname: "xyz",
  };

  const [state, setState] = useState("User....");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      {/* <button onClick={click}>click</button> */}
      <Navbar userName={state} className="bg" />

      <Main />

      <input value={state} onChange={handleChange} />
    </>
  );
}

export default App;
