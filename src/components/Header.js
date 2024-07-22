import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Ease Read</h1>
      <nav>
        <Link to="/">Home</Link> <br/>
        <Link to="/library">Library</Link><br/>
        <Link to="/upload">Upload Book</Link><br/>
        <Link to="/profile">Profile</Link><br/>
        <Link to="/login">Login</Link><br/>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;