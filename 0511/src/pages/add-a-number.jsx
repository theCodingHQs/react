import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AddNumber = ({ id, value, target, setTarget }) => {
  const [num, setNum] = useState(0);

  const handleProcess = () => {
    if (target == id) {
      setNum(num + Number(value));
      setTarget("-1");
    }
  };

  useEffect(handleProcess, [target]);

  return (
    <div className="preview-card">
      <div>Number + 1</div>
      <span className="value">{num}</span>
      <span>{value}</span>
    </div>
  );
};

export default AddNumber;
