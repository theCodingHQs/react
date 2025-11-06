import React, { useEffect, useState } from "react";

const Spaces = ({ value, id, target, setTarget }) => {
  const [state, setState] = useState("_ _");

  useEffect(() => {
    if (target == id) {
      setState(value);
      setTarget("-1");
    }
  }, [target]);
  return (
    <div className="preview-card">
      <div>Includes Spaces</div>
      <span className="value">{state}</span>
    </div>
  );
};

export default Spaces;
