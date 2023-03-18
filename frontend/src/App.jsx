import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './auth/Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Profile from './components/Profile'
import Login from './auth/Login'
import Home from './components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
