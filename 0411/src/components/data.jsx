import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Data = (props) => {
  const [state, setState] = useState("xyz");

  const cbFun = () => {
    setState(props.value);
  };

  useEffect(cbFun, [props.value]);

  return (
    <div style={{ textAlign: "center" }}>
      preview
      <br />
      <b>{state}</b>
    </div>
  );
};

export default Data;
