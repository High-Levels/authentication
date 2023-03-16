import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./components/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
