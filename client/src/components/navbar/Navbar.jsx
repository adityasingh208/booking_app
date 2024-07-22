import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import logo from "../../images/logo.png";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate("/login");
  }
  const handleClickReg=()=>{
    navigate("/register");
  }
  const handleLogout=()=>{
    dispatch({ type: "LOGOUT" })
    navigate("/login");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <div className="navtitle">
        <img className="logo-img" src={logo} alt="logo-img" />
          <span className="logo"> ReservEasy</span>
        </div>
        </Link>
        {user 
        ? ( 
            <div className="profileSection"> 
                <p className="userName">{user.username}</p> 
                <button className="navButton" onClick={handleLogout}>Logout</button>
            </div>
            
          )
        : (
          <div className="navItems">
            <button className="navButton" onClick={handleClickReg}>Register</button>
            <button onClick={handleClick} className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
