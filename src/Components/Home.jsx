import React from "react";
import { useNavigate } from "react-router-dom";
 
const Home = () => {
  const userName = JSON.parse(localStorage.getItem("Userdetail"));
 
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem('loggedin');
    navigate('/login');
  }
  const handleDelete = () =>{
     localStorage.removeItem('loggedin');
     localStorage.removeItem('Userdetail');
     navigate('/signup');
  }
  return (
    <div>
      <div className="Home">
        <div className="HomeContainer">
          <div className="child">
            <h1 className="headingHome">HOME</h1>
            <p>Welcome - {userName.name}</p>
            <button className="btnLogout" type="button" onClick={handleLogout}>Logout User</button>
            <button className="btnDelete"  type="button" onClick={handleDelete}>Delete User</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
