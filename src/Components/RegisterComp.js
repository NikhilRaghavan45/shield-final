import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter, Routes, useNavigate } from 'react-router-dom';

import axios from 'axios';


const SignInPage = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    num: '',
    email: '',
    password: '',
    Rpassword: ''
  })
  const nav = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Simple validation checks
    // if (!formData.username) {
    //   newErrors.username = 'Username is required';
    // }

    // if (!formData.email) {
    //   newErrors.email = 'Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   newErrors.email = 'Invalid email address';
    // }

    // if (!formData.password) {
    //   newErrors.password = 'Password is required';
    // } else if (formData.password.length ==`(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`) {
    //   newErrors.password = 'Password must be at least 6 characters';
    // }

    if (formData.Rpassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Make a POST request to JSON Server
        const response = await axios.post('http://localhost:3001/users', formData);

        // Handle the response as needed
        console.log('User created:', response.data);
        window.alert('Register successfull')
        nav('/LoginComp');
        // Optionally, redirect to another page or perform other actions
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
  };








  return (
    <div className="background-container">
      <div className="container ">
        <div className="row">
          <div className="col-4 mt-5">

            {/* <div className="card-body"> */}
            <h2 className='mt-1'>Sign Up</h2><br />
            <form onSubmit={handleSubmit}>

              <div className="col-8 mx-auto">
                <label htmlFor="fname" className="form-label"><b>First Name</b></label>
                <input
                  type="text"
                  className="form-control border-danger"
                  id="fname"
                  name="fname"
                  pattern="[A-Za-z]{3,10}"
                  value={formData.fname} onChange={handleChange}
                  required />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
              </div>
              <div className="col-8 mx-auto">
                <label htmlFor="email" className="form-label"><b>Last Name</b></label>
                <input
                  type="text"
                  className="form-control border-danger"
                  id="lname"
                  name='lname'
                  value={formData.lname} onChange={handleChange}
                />  {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
              </div>
              <div className="col-8 mx-auto">
                <label htmlFor="tel" className="form-label"><b>Contact No</b></label>
                <input
                  type="tel"
                  className="form-control border-danger"
                  id="tel"
                  name='num'
                  pattern="[789][0-9]{9}"
                  value={formData.num} onChange={handleChange}
                  required
                />
              </div>
              <div className="col-8 mx-auto">
                <label htmlFor="email" className="form-label"><b>Email:</b></label>
                <input
                  type="email"
                  className="form-control border-danger"
                  id="email"
                  name='email'

                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  value={formData.email} onChange={handleChange}
                  required
                />  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </div>
              <div className="col-8 mx-auto">
                <label htmlFor="password" className="form-label"><b>Password:</b></label>
                <input
                  type="password"
                  className="form-control border-danger"
                  id="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"

                  name='password'
                  value={formData.password} onChange={handleChange}
                  required
                />  {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
              </div>
              <div className="col-8 mx-auto">
                <label htmlFor="password" className="form-label "><b>Re-Type Password:</b></label>
                <input
                  type="password"
                  className="form-control border-danger"
                  id="Rpassword"
                  name='Rpassword'
                  value={formData.Rpassword} onChange={handleChange}
                  required
                />  {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
              </div><br />
              <button to="/LoginComp" type="submit" className="btn btn-primary ml-1" >Sign Up</button>


            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default SignInPage;
