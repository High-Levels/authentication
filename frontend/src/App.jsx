import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/Register";
import Home from "./components/Home";
import UserData from "./auth/UserData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-data" element={<UserData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
