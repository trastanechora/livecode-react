// LIST IMPORT MODULE
import React from 'react';
import { Link } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';

// COMPONENT BODY
const Navigation = props => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header1">
      <img className="nav-logo" src={require("../logo/logo.svg")}/>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">KabarKabar</Link>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/Football" className="nav-link">Sepakbola</Link>
          </li>
          <li className="nav-item">
            <Link to="/Economy" className="nav-link">Ekonomi</Link>
          </li>
          <li className="nav-item">
            <Link to="/Politic" className="nav-link">Politik</Link>
          </li>
          <li className="nav-item">
            <Link to="/Entertainment" className="nav-link">Hiburan</Link>
          </li>
          <li className="nav-item">
            <Link to="/sport" className="nav-link">Sport</Link>
          </li>
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li>
            <Link style={{ display: is_login ? 'block' : 'none' }} to="/" className="nav-link" onClick={() => props.postSignout()}>Keluar</Link>
          </li>
          <li>
            <Link style={{ display: is_login ? 'none' : 'block' }} to="/Signin" className="nav-link" onClick={() => props.checkState()}>Masuk</Link>
          </li>
          <li>
            <Link to="/Profile" className="nav-link">Profile</Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};
    

// EXPORT THE COMPONENT BODY
export default Navigation; 
