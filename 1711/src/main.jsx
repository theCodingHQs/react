import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserContext } from "./contexts/user.jsx";

const user = {
  name: "Aakash",
  age: 23,
  address: "pune",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext value={{ user, authInfo: { token: "haggsjdgvjyfkvjh" } }}>
      <App />
    </UserContext>
  </StrictMode>
);
