import React from "react";
import { Link } from "react-router-dom";
import "../styles/create.css";

const Create = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const businessName = e.target.businessName.value;
    const gstNo = Number(e.target.gstNo.value);
    const email = e.target.email.value;
    const phone = Number(e.target.mobileNo.value);
    const password = e.target.password.value;

    const formData = {
      name: name,
      businessName: businessName,
      gst: gstNo,
      email: email,
      phone: phone,
      password: password,
    };

    fetch(
      "https://steelbazarbackend-takdirhossain.vercel.app/api/auth/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log("login complete");
    });
  };

  return (
    <>
      <div className="containercreate">
        <form className="card" onSubmit={handleSubmit}>
          <div className="singup">Sign Up
         
            </div>
          <div className="inputBox1">
            <input type="text" required="required" name="name" />
            <span className="user">Name</span>
          </div>
          <div className="inputBox">
            <input type="text" required="required" name="businessName" />
            <span className="user">Business Name</span>
          </div>
          <div className="inputBox1">
            <input type="text" required="required" name="gstNo" />
            <span className="user">GST No</span>
          </div>
          <div className="inputBox1">
            <input type="text" required="required" name="email" />
            <span className="user">Email</span>
          </div>
          <div className="inputBox">
            <input type="text" required="required" name="mobileNo" />
            <span>Mobile No</span>
          </div>
          <div className="inputBox">
            <input
              type="password"
              required
              name="password"
              autocomplete="current-password"
            />
            <span>Password</span>
          </div>

          <button type="submit" className="enter" button="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
