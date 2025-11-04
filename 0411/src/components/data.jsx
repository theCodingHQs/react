import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Data = (props) => {
  const [state, setState] = useState(props.value);

  const cbFun = () => {
    setState(props.value);
  };

  useEffect(cbFun, [props.value]);

  return <div>{state}</div>;
};

export default Data;
