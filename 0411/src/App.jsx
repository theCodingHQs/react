import { useState } from "react";
import Form from "./components/form";
import Data from "./components/data";

function App() {
  const [value, setValue] = useState("hello");

  return (
    <div>
      <Data value={value} />

      <Form value={value} setValue={setValue} />
    </div>
  );
}

export default App;
