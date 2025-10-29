import "./App.css";
import UserForm from "./pages/user-form/user-form";
import User from "./pages/user/user";

const data = {
  name: "Rohit",
  age: 24,
  address: "pune",
  mobile: 1234567890,
};

function App() {
  return (
    <>
      <User user={data} />
      <UserForm data={data} />
    </>
  );
}

export default App;
