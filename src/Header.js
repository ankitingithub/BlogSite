import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then(response=>{
      response.json().then(userInfo=>{
        setUserInfo(userInfo);
      });
    });
    setUserInfo({username:username});
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }
  
  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        MYBLOG
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">LogIn</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
