import axios from "axios";
import React, { useEffect, useState } from "react";

function UserData() {
  const [data, setData] = useState([]);

  const getDataUser = () => {
    axios
      .get("http://192.168.1.71:5000/auth/register/user")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <div className="container m-5 mx-auto">
      <div className="row">
        <div className="col">
          <h2 className="text-center">List Users</h2>
          <table className="table table-bordered">
            <thead className="table-dark text-center">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>city</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{username.id}</td>
                  <td>{user.password}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserData;
