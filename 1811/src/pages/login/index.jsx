import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, type } = event.target;
    setInfo({ ...info, [type]: value });
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:4000/api/auth/login", info)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="bg-blue-600 min-h-screen flex items-center justify-center ">
      <div className="bg-white p-10 pt-4 flex flex-col gap-2 rounded-2xl shadow-2xl border border-dashed border-blue-600">
        <h1 className="text-center text-4xl font-bold my-4 text-blue-600">
          Login
        </h1>
        <div className="bg-blue-600 p-2 text-white flex flex-col rounded">
          <label className="text-xs">Email</label>
          <input
            className="rounded p-0.5 text-sm px-2 bg-white text-blue-600"
            type="email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div className="bg-blue-600 p-2 text-white flex flex-col rounded">
          <label className="text-xs">Password</label>
          <input
            className="rounded p-0.5 text-sm px-2 bg-white text-blue-600"
            type="password"
            value={info.password}
            onChange={handleChange}
          />
        </div>
        <div className="pt-2">
          <button
            className="bg-blue-600 text-white p-1 px-4 rounded w-full"
            type="button"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
