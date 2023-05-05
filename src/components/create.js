import React, { useState } from "react";
import "../styles/create.css";
import axios from 'axios';

const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    gstNo: '',
    email: '',
    mobileNo: '',
    password: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/create', formData)
      .then(() => {
        window.location.href = '/dashboard';
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  return (
    <>
      <div className="containercreate">
        <form className="card" onSubmit={handleSubmit}>
          <div className="singup">Sign Up</div>
          <div className="inputBox1">
            <input
              type="text"
              required=""
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <span className="user">Name</span>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required=""
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
            />
            <span className="user">Business Name</span>
          </div>
          <div className="inputBox1">
            <input
              type="text"
              required=""
              name="gstNo"
              value={formData.gstNo}
              onChange={handleInputChange}
            />
            <span className="user">GST No</span>
          </div>
          <div className="inputBox1">
            <input
              type="text"
              required=""
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="user">Email</span>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required=""
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
            />
            <span>Mobile No</span>
          </div>
          <div className="inputBox">
            <input
              type="password"
              required=""
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span>Password</span>
          </div>
          <button type="submit" className="enter">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
