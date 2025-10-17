import { useState } from "react";

function App() {
  const data = {
    username: "rahul1526",
    password: "12345678",
  };

  // name , email , address , city , pin code , mobile, landline

  const [user, setUser] = useState(data);

  // const onClick = (e) => {
  //   let value = e.target.innerText;
  //   let temp = { ...user };
  //   temp.username = temp.username + value;
  //   setUser(temp);
  // };
  const onChange = (e) => {
    const fieldname = e.target.id;

    let value = e.target.value;
    let temp = { ...user };

    if (fieldname == "username") {
      temp.username = value;
    }
    if (fieldname == "password") {
      temp.password = value;
    }
    setUser(temp);
  };

  console.log(user);

  return (
    <form>
      <div className="input-field">
        <label htmlFor="username">username</label>
        <input id="username" onChange={onChange} value={user.username} />
      </div>
      <div className="input-field">
        <label htmlFor="password">pasword</label>
        <input
          id="password"
          onChange={onChange}
          type="password"
          value={user.password}
        />
      </div>
      <div>
        <button type="button">Submit</button>
      </div>
    </form>
  );
}

export default App;
