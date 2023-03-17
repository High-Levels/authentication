import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-dark'>
        <div className='container'>
          <a className='navbar-brand text-white' href='#'>
            Project 1
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNavDropdown'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link
                  to='/login'
                  className='btn btn-outline-success me-2'
                  type='button'
                >
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/register'
                  className='btn btn-outline-success me-2'
                  type='button'
                >
                  Register
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle text-white'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Ujang Arisandi
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item text-center' href='#'>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
