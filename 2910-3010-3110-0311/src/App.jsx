import { useState } from "react";
import "./App.css";
import UserForm2 from "./pages/user-form-2/user-form";
import UserForm3 from "./pages/user-form-3/user-form";
import UserForm4 from "./pages/user-form-4/user-form";
import UserForm from "./pages/user-form/user-form";
import User from "./pages/user/user";

function App() {
  const [user, setUser] = useState({
    name: "Rohit",
    age: 24,
    address: "pune",
    mobile: 1234567890,
  });

  return (
    <>
      <User user={user} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <UserForm data={user} />
        <UserForm2 data={user} />
        <UserForm3 data={user} />
        <UserForm4 user={user} setUser={setUser} />
      </div>
    </>
  );
}

export default App;
