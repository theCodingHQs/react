import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Alphabets = ({ id, value, target, setTarget }) => {
  const [str, setStr] = useState("_");

  useEffect(() => {
    if (target == id) {
      setStr(value);
      setTarget("-1");
    }
  }, [target]);

  return (
    <div className="preview-card">
      <div>Includes Alphabets</div>
      <span className="value">{str}</span>
      <span>{value}</span>
    </div>
  );
};

export default Alphabets;
