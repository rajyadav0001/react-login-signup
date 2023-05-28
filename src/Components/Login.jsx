import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) =>{
      e.preventDefault();
      const logedUser = JSON.parse(localStorage.getItem('Userdetail'));
      if(logedUser.email===input.email && logedUser.password===input.password){
          localStorage.setItem("loggedin",true);
          navigate('/');
      }else{
          alert("Wrong Email or Password");
      }
  }
  return (
    <div className="Login">
      <div className="LoginContainer">
        <div className="child">
          <h1 className="headingLogin">LOGIN</h1>
          <form  onSubmit={handleLogin}>
            <div className="fields">
              <label className="labal">Your Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
              <label className="labal">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
            </div>
            <button className="btn">Login</button>
          </form>
          <div className="existingUser">
            <p className="Alreadyaccount">
              Don't have an account? <Link to="/signup">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
