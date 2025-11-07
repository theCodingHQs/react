import React, { useState } from "react";

const Form = ({ setUsers }) => {
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    const name = event.target.name; //email
    const value = event.target.value; //admin@example.com
    setUser({ ...user, [name]: value });
  };

  const handleUserAdd = () => {
    setUsers((data) => [...data, user]);
  };

  return (
    <form className="w-fit mx-auto bg-gray-200 p-4 rounded shadow-xl flex flex-col gap-4">
      <h1 className="font-bold">User Form</h1>
      <div className="bg-white rounded-lg flex flex-col  p-2">
        <label className="text-left text-slate-500 capitalize text-xs">
          name
        </label>
        <input
          className="border rounded"
          name="name"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="bg-white rounded-lg flex flex-col  p-2">
        <label className="text-left text-slate-500 capitalize text-xs">
          email
        </label>
        <input
          className="border rounded"
          name="email"
          type="email"
          onChange={handleChange}
        />
      </div>
      <div className="bg-white rounded-lg flex flex-col  p-2">
        <label className="text-left text-slate-500 capitalize text-xs">
          mobile
        </label>
        <input
          className="border rounded"
          name="mobile"
          type="number"
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          onClick={handleUserAdd}
          type="button"
          className="border py-0.5 px-4 rounded text-sm text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default Form;
