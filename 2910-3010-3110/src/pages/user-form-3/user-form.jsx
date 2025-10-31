import { useState } from "react";
import { style as globalStyle } from "../user/style";

const UserForm3 = (props) => {
  // const [name, setName] = useState(props.data.name);
  // const [age, setAge] = useState(props.data.age);
  // const [address, setAddress] = useState(props.data.address);
  // const [mobile, setMobile] = useState(props.data.mobile);

  const [user, setUser] = useState(props.data); //{}

  const handleChange = (e) => {
    const id = e.target.id;

    if (id == "name") {
      setUser({ ...user, name: e.target.value });
    }
    if (id == "age") {
      setUser({ ...user, age: e.target.value });
    }
    if (id == "address") {
      setUser({ ...user, address: e.target.value });
    }
    if (id == "mobile") {
      setUser({ ...user, mobile: e.target.value });
    }
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
      <h1>User Form - 3 </h1>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Name - </label>
        <input id="name" value={user.name} onChange={handleChange} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Age - </label>
        <input id="age" value={user.age} onChange={handleChange} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Address - </label>
        <input id="address" value={user.address} onChange={handleChange} />
      </div>
      <div style={globalStyle.inputGroup}>
        <label style={globalStyle.fieldLabel}>Mobile - </label>
        <input id="mobile" value={user.mobile} onChange={handleChange} />
      </div>
    </div>
  );
};

export default UserForm3;
