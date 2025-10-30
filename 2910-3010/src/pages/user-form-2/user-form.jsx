import { useState } from "react";
import { style as globalStyle } from "../user/style";

const UserForm2 = (props) => {
  // const [name, setName] = useState(props.data.name);
  // const [age, setAge] = useState(props.data.age);
  // const [address, setAddress] = useState(props.data.address);
  // const [mobile, setMobile] = useState(props.data.mobile);

  const [user, setUser] = useState(props.data); //{}

  const handleNameChange = (event) => {
    let temp_user = { ...user };
    temp_user.name = event.target.value;
    setUser(temp_user);
  };

  const handleAgeChange = (e) => {
    const temp_age = e.target.value;
    let temp_user = user;
    temp_user.age = temp_age;
    setUser({ ...temp_user });
  };

  const handleAddressChange = function (e) {
    const { value } = e.target;
    setUser({ ...user, address: value }); //    {  ...user, address: value }
  };

  const handleMobileChange = (evenet) => {
    const { value: mobile } = evenet.target;
    setUser({ ...user, mobile });
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
      <h1>User Form - 2 </h1>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Name - </label>
        <input value={user.name} onChange={handleNameChange} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Age - </label>
        <input value={user.age} onChange={handleAgeChange} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Address - </label>
        <input value={user.address} onChange={handleAddressChange} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Mobile - </label>
        <input value={user.mobile} onChange={handleMobileChange} />
      </div>
    </div>
  );
};

export default UserForm2;
