import React, { useState } from "react";

const UserForm = ({ data }) => {
  const [users, setUsers] = useState(data);
  const onAddUser = (xyz) => {
    xyz.preventDefault();

    setUsers([...users, { name: "rohit", age: 23, address: "pune" }]);
  };

  console.log(users);

  return (
    <form>
      <div>
        <label>name</label>
        <input />
      </div>
      <div>
        <label>age</label>
        <input type="number" />
      </div>
      <div>
        <label>address</label>
        <input />
      </div>
      <div>
        <button onClick={onAddUser}>Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
