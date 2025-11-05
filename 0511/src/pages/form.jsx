import React from "react";

const Form = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Form;
