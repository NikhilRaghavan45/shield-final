import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import '../component/cloths.css'

const LoginComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('user');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;

      if (selectedOption === "admin") {
        response = await axios.get('http://localhost:3001/admin', {
          params: {
            email,
            password,
          },
        });
      } else if (selectedOption === "user") {
        // Use the appropriate endpoint for user login
        response = await axios.get('http://localhost:3001/users', {
          params: {
            email,
            password,
          },
        });
      }





      const userData = response.data;

      if (userData.length > 0) {
        // Successful login

        console.log('Login successful');

        console.log(email, password)

        if (selectedOption === "admin" && email === "admin@gmail.com" && password === "Admin@123" && selectedOption === "admin") {
          navigate('/App')
        } else if (selectedOption === "user" && email !== "admin@gmail.com" && password !== "Admin@123" && selectedOption === "user") {
          navigate('/App/UserSideComp');
        } else {
          console.log('Invalid email or password');
          setError({ login: 'Incorrect email or password' });
        }

      } else {
        console.log(email, password)
        // Invalid credentials
        console.log('Invalid email or password');
        setError({ login: 'Incorrect email or password' });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="backgroundcontainer pr-5 " >
      <div className="container" >
        <div className="row justify-content-start">
          <div className="col-md-4 pr-5 m-5 card rounded-5 shadow-lg border-success">
            {/* <div className="card">  */}
            {/* <div className="card-body">  */}
            <h1 className=" text-center mt-3 text-success">Login</h1><hr />
            <br />
            <form onSubmit={handleFormSubmit}>
              <div className="col-8 mx-auto">

                <input
                  type="radio"
                  id="userRadio"
                  name="userType"
                  value="user"
                  checked={selectedOption === 'user'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="userRadio" style={{ marginRight: '25px', fontSize: "20px" }}><strong>User</strong></label>



                <input
                  type="radio"
                  id="adminRadio"
                  name="userType"
                  value="admin"
                  checked={selectedOption === 'admin'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="adminRadio" style={{ fontSize: "20px" }}><strong>Admin</strong></label>
                <br />
                <br />
                <label htmlFor="email" className="form-label " style={{ fontfamily: 'Bebas Neue, sans-serif' }}><b><h3>Email:</h3> </b></label>
                <input
                  type="email"
                  className="form-control rounded-5 shadow-lg border-success"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div><br />
              <div className="col-8 mx-auto">
                <label htmlFor="password" className="form-label" style={{ fontfamily: 'Bebas Neue, sans-serif' }}><h3>Password:</h3></label>
                <input
                  type="password"
                  className="form-control rounded-5 shadow-lg border-success"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                /> {error.login && <p style={{ color: 'red' }}>{error.login}</p>}
              </div><br />
              <button type="submit" className="btn btn-lg btn-success m-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default LoginComp;
