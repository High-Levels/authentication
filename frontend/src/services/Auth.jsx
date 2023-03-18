import axios from 'axios'
const API_URL = 'http://localhost:5000/'
const login = async (username, password) => {
  try {
    const res = await axios.post(API_URL + 'auth/login/user', {
      username,
      password,
    })
    const { user, token } = res.data.Data

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user.username))

    // console.log(res)
    // alert('Login Success')

    return { user, token }
  } catch (error) {
    console.log(error)
    alert('Login failed')
    throw error
  }
}

export { login }
