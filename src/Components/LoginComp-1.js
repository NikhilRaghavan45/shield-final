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
  const navigate=useNavigate('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit =  async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users', {
        params: {
          email,
          password,
        },
      });

      const userData = response.data;

      if (userData.length > 0) {
        // Successful login
        console.log('Login successful');
        navigate('/SidebarComp')
      } else {
        // Invalid credentials
        console.log('Invalid username or password');
        setError({ login: 'Incorrect username or password' });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="backgroundcontainer pr-5 " >
    <div className="container-fluid" >
      <div className="row justify-content-start">
        <div className="col-md-4 pr-5 mt-5">
          {/* <div className="card">  */}
            {/* <div className="card-body">  */}
              <h1 className=" text-center mt-5 text-info">Login</h1>
             <br/>
              <form onSubmit={handleFormSubmit}>
                <div className="col-8 mx-auto">
                <label htmlFor="email" className="form-label text-white" style={{ fontFamily: 'Roboto, sans-serif' }}><h3>Email:</h3></label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                 </div><br/>
                <div className="col-8 mx-auto">
                  <label htmlFor="password" className="form-label text-white" style={{fontfamily: 'Bebas Neue, sans-serif'}}><h3>Password:</h3></label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  /> {error.login && <p style={{ color: 'red' }}>{error.login}</p>}
                </div><br/>
                <button type="submit" className="btn btn-primary">Login</button>
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
