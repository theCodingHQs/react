import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Users from "./pages/users";
import Navbar from "./pages/navbar";
import Layout from "./pages/layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
