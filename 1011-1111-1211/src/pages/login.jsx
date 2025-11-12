import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({}); //{username:"admin@example.com"}
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name; //username
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const handleLogin = () => {
    localStorage.setItem("auth", JSON.stringify(state));
    navigate("/");
  };

  return (
    <div className="w-full border h-screen flex items-center justify-center">
      <div className="p-4 bg-yellow-500 w-fit space-y-6 rounded shadow-lg">
        <div className="flex flex-col">
          <label className="text-xs text-white">Username</label>
          <input
            className="border bg-white rounded"
            name="username"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-white">Password</label>
          <input
            className="border bg-white rounded"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-black text-yellow-500 px-2 rounded p-1 hover:bg-white hover:yellow-500 cursor-pointer transition-all"
          >
            Log In
          </button>
        </div>
        {JSON.stringify(state)}
      </div>
    </div>
  );
};

export default Login;
