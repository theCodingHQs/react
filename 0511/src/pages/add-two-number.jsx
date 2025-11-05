import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TwoNumber = ({ id, value, target, setTarget }) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (target == id) {
      setNum(num + Number(value));
      setTarget(-1);
    }
  }, [target]);
  return (
    <div className="preview-card">
      <div>Number + 2</div>
      <span className="value">{num}</span>
      <span>{value}</span>
    </div>
  );
};

export default TwoNumber;
