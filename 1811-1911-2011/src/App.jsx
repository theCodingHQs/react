import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import UseEffect from "./pages/use-effect";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/useeffect" element={<UseEffect />} />
      </Routes>
    </div>
  );
}

export default App;
