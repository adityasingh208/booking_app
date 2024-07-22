import { useContext } from "react";
import { useState } from "react";
import "./login.css";
import { AuthContext } from "../../components/context/AuthContext.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginimg from "../../images/5556.png";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://booking-app-i4x9.onrender.com/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="rContainer">
          <img className="img-login" src={loginimg} alt="" />
        </div>
        <div className="lContainer">
          <h3 className="title-1">Sign in</h3>
          <input
            type="text"
            placeholder="username"
            id="username"
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
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          <button className="lButton" onClick={handleRegister}>
            Click here to create an account
          </button>

          {error && <span>{error.message}</span>}
        </div>
      </div>
    </>
  );
};

export default Login;
