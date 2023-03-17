import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { login } from '../services/Auth'

const Login = () => {
  // hooks deklaration
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { user } = await login(username, password)
      localStorage.setItem('user', JSON.stringify(user.username))
      setUser(user)
      alert('Login berhasil!')
      navigate('/profile')
    } catch {
      console.log(err)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='container mt-5 align-content-center'>
        <div className='row'>
          <div className='col-4 mx-auto'>
            <div className='card'>
              <form onSubmit={handleSubmit}>
                <div className='card-header'>
                  <h2 className='text-center'>Login</h2>
                </div>
                <div className='card-body row'>
                  <div className='col'>
                    <div className='form-group mb-'>
                      <label htmlFor='username'>Username:</label>
                      <input
                        type='text'
                        id='username'
                        name='username'
                        value={username}
                        placeholder='Enter username'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className='form-control'
                      />
                    </div>
                    <div className='form-group mb-6'>
                      <label htmlFor='password'>Password:</label>
                      <input
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Enter password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='form-control'
                      />
                    </div>
                  </div>
                </div>

                <div className='card-footer'>
                  {!user ? (
                    <button
                      type='submit'
                      className='btn btn-success'
                      style={{ width: '100%' }}
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      className='btn btn-danger'
                      style={{ width: '100%' }}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
