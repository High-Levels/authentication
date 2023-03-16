import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    gender: "",
    phone_number: "",
    address: "",
    city: "",
    role: "user",
  });
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://192.168.43.61:5000/auth/register/user", userData)
      .then((response) => {
        console.log(response.data);
        navigate("/");
        // redirect to success page or login page
      })
      .catch((error) => {
        console.log(error.response.data);
        // display error message
      });
  };

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-6 mx-auto">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="card-header">
                <h2 className="text-center">Register</h2>
              </div>
              <div className="card-body row">
                <div className="col">
                  <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userData.name}
                      placeholder="Enter name"
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userData.email}
                      placeholder="Enter email"
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={userData.username}
                      placeholder="Enter username"
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={userData.password}
                      placeholder="Enter password"
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group mb-3">
                    <label htmlFor="gender">Gender:</label>
                    <select
                      id="gender"
                      name="gender"
                      value={userData.gender}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    >
                      <option value="">-- Select Gender --</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="phone_number">Phone Number:</label>
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      value={userData.phone_number}
                      placeholder="Enter phone number"
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={userData.city}
                      placeholder="Enter city"
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="address">Address:</label>
                    <textarea
                      id="address"
                      name="address"
                      value={userData.address}
                      placeholder="Enter address"
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ width: "100%" }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
