import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
