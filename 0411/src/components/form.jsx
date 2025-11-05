import React from "react";

const Form = (props) => {
  const handleChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      Form
      <br />
      <input value={props.value} onChange={handleChange} />
    </div>
  );
};

export default Form;
