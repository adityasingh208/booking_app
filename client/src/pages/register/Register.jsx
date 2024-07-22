import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import loginimg from "../../images/5556.png";
import Navbar from "../../components/navbar/Navbar";

export const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  console.log(credentials);
  const handleClick = () => {
    axios
      .post(
        "https://booking-app-i4x9.onrender.com/api/auth/register",
        credentials
      )
      .then((data) => {
        alert("User Created!");
        navigate("/login");
      })
      .catch((err) => {
        alert("Please enter unique username and email");
      });
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <Navbar/>
      <div className="login">
        <div className="rContainer">
          <img className="img-login" src={loginimg} alt="" />
        </div>
        <div className="lContainer">
          <h3 className="title-1">Sign Up</h3>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="email"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button onClick={handleClick} className="lButton">
            Register
          </button>
          <button className="lButton" onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};
