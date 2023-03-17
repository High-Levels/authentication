import axios from 'axios'
const API_URL = 'http://localhost:5000/'
const login = async (username, password) => {
  try {
    const res = await axios.post(API_URL + 'auth/login/user', {
      username,
      password,
    })
    const { user, token, email, gender, address, city } = res.data.Data

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user.username))
    localStorage.setItem('email', JSON.stringify(user.email))
    localStorage.setItem('gender', JSON.stringify(user.gender))
    localStorage.setItem('address', JSON.stringify(user.address))
    localStorage.setItem('city', JSON.stringify(user.city))
    // console.log(res)
    // alert('Login Success')

    return { user, token, email, gender, address, city }
  } catch (error) {
    console.log(error)
    alert('Login failed')
    throw error
  }
}

export { login }
