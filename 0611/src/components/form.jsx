import React from "react";

const Form = () => {
  return (
    <form className="w-fit mx-auto bg-gray-200 p-4 rounded shadow-xl flex flex-col gap-4">
      <h1 className="font-bold">User Form</h1>
      <div className="bg-white rounded-lg flex flex-col  p-2">
        <label className="text-left text-slate-500 capitalize text-xs">
          name
        </label>
        <input className="border rounded" name="name" type="text" />
      </div>
      <div className="bg-white rounded-lg flex flex-col  p-2">
        <label className="text-left text-slate-500 capitalize text-xs">
          email
        </label>
        <input className="border rounded" name="email" type="email" />
      </div>
      <div className="bg-white rounded-lg flex flex-col  p-2">
        <label className="text-left text-slate-500 capitalize text-xs">
          mobile
        </label>
        <input className="border rounded" name="mobile" type="number" />
      </div>
      <div>
        <button className="border py-0.5 px-4 rounded text-sm text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer">
          Add User
        </button>
      </div>
    </form>
  );
};

export default Form;
