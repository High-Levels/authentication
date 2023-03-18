import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Dashboard = () => {
  // hooks profile
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  // useEffect menampilkan data profile
  useEffect(() => {
    // pasang token yang login
    const token = localStorage.getItem('token')
    axios
      .get('http://localhost:5000/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfile(res.data.data)
        console.log(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <Navbar />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card'>
              <img
                src={profile.picture}
                className='card-img-top'
                alt='Profile Picture'
              />
              <div className='card-body'>
                <h5 className='card-title'>{profile.name}</h5>
                <p className='card-text'>{profile.email}</p>
                <p className='card-text'>{profile.phone_number}</p>
                <a href='#' className='btn btn-primary'>
                  Edit Profile
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Profile Information</h5>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <strong>Username:</strong> {profile.username}
                  </li>
                  <li className='list-group-item'>
                    <strong>Email:</strong> {profile.email}
                  </li>
                  <li className='list-group-item'>
                    <strong>Name:</strong> {profile.name}
                  </li>
                  <li className='list-group-item'>
                    <strong>Gender:</strong> {profile.gender}
                  </li>
                  <li className='list-group-item'>
                    <strong>Address:</strong> {profile.address}
                  </li>
                  <li className='list-group-item'>
                    <strong>City:</strong> {profile.city}
                  </li>
                  <li className='list-group-item'>
                    <strong>Phone Number:</strong> {profile.phone_number}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <button className='btn btn-secondary' onClick={() => navigate('/')}>
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
