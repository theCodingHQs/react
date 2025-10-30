import "./App.css";
import UserForm2 from "./pages/user-form-2/user-form";
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
      <div style={{ display: "flex" }}>
        <UserForm data={data} />
        <UserForm2 data={data} />
      </div>
    </>
  );
}

export default App;
