import Counter from "./components/counter";
import Users from "./components/users";
import UserForm from "./components/user-form";

function App() {
  const users = [{ name: "rohit.2", age: 23, address: "pune" }];
  return (
    <>
      <Users data={users} />
      <UserForm data={users} />
      <Counter value={0} />
    </>
  );
}

export default App;
