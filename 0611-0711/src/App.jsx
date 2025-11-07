import { useState } from "react";
import Form from "./components/form";
import UsersTable from "./components/users";

const users = [
  { name: "Rohit", email: "example@gmail.com", mobile: "0123456789" },
  { name: "Rohit", email: "example@gmail.com", mobile: "0123456789" },
  { name: "Rohit", email: "example@gmail.com", mobile: "0123456789" },
];

function App() {
  const [data, setData] = useState(users);

  return (
    <div className="flex">
      <Form setUsers={setData} />
      <UsersTable users={data} />
    </div>
  );
}

export default App;
