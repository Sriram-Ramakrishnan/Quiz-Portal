import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const auth =  useAuth();
  const navigate = useNavigate();

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      try {
        const newUser = {
          name,
          email,
          password,
        };
        const body = JSON.stringify(newUser);
        const response = await fetch('http://localhost:5000/auth/register',{
            method: "POST",
            headers: {
              'Content-Type':'application/json'
            },
            body: body
        });
        const parseRes = await response.json();
        console.log(parseRes);
        localStorage.setItem("user_email",user.email);
        localStorage.setItem("token",parseRes.token);
        auth.login(email,password);
        navigate('/dashboard',{replace: true})
        console.log("Registered Successfully");
      } catch (err) {
        console.error(err.message);
      }
      
    }
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            This portal only accepts VIT Email ID, i.e., the mail ending with vitstudent.ac.in
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
