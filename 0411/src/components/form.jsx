import React from "react";

const Form = (props) => {
  const handleChange = (e) => {
    props.setValue(e.target.value);
  };

  return <input value={props.value} onChange={handleChange} />;
};

export default Form;
