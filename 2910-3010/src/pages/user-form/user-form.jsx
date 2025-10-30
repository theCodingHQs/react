import { useState } from "react";
import { style as globalStyle } from "../user/style";

const UserForm = (props) => {
  const [name, setName] = useState(props.data.name);
  const [age, setAge] = useState(props.data.age);
  const [address, setAddress] = useState(props.data.address);
  const [mobile, setMobile] = useState(props.data.mobile);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (e) => {
    const temp_age = e.target.value;
    setAge(temp_age);
  };

  const handleAddressChange = function (e) {
    const { value } = e.target;
    setAddress(value);
  };

  const handleMobileChange = (evenet) => {
    const { value: user_mobile } = evenet.target;
    setMobile(user_mobile);
  };

  return (
    <div
      style={{
        ...globalStyle.container,
        background: "none",
        boxShadow: "none",
        margin: 20,
        border: "1px solid #ccc",
      }}
    >
      <h1>User Form</h1>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Name - </label>
        <input value={name} onChange={handleNameChange} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Age - </label>
        <input value={age} onChange={handleAgeChange} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Address - </label>
        <input value={address} onChange={handleAddressChange} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Mobile - </label>
        <input value={mobile} onChange={handleMobileChange} />
      </div>
    </div>
  );
};

export default UserForm;
