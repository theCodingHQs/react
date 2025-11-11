import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    const d = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      });
    console.log(d);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  console.log(users);

  return (
    <div className="bg-fuchsia-400 text-white h-full">
      {users.map((user) => (
        <div> {user.name}</div>
      ))}
    </div>
  );
};

export default Users;
