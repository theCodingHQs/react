import { useState } from "react";
import { style as globalStyle } from "../user/style";

const UserForm = (props) => {
  const [name, setName] = useState(props.data.name);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div
      style={{
        ...globalStyle.container,
        background: "none",
        boxShadow: "none",
      }}
    >
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Name - </label>
        <input value={name} onChange={handleNameChange} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Age - </label>
        <input value={props.data.age} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Address - </label>
        <input value={props.data.address} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Mobile - </label>
        <input value={props.data.mobile} />
      </div>
    </div>
  );
};

export default UserForm;
