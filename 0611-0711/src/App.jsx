import { useState } from "react";
import Form from "./components/form";
import UsersTable from "./components/users";

const users = [];

function App() {
  const [data, setData] = useState(users);

  return (
    <div className="flex">
      <Form setUsers={setData} />
      {data.length > 0 && <UsersTable users={data} />}
    </div>
  );
}

export default App;
