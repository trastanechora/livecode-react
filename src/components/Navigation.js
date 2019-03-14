// LIST IMPORT MODULE
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from '../store'

// COMPONENT BODY
class Navigation extends Component {
  render() {
    // console.log("Cek is_login from navbar", this.props.is_login)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light header1">
        <img className="nav-logo" src={require("../logo/logo.svg")} alt=""/>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
  
        <div className=" navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="btn btn-light">MOVIE</Link>
            </li>
            <li>
              <Link to="/category" className="btn btn-light">CATEGORY</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li>
              <Link to="/Profile" className="btn btn-light">PROFILE</Link>
            </li>
            {/* <li>
              <Link to="/" className="nav-link" onClick={() => this.props.updateList("TEST")}>UPDATE</Link>
            </li>
            <li>
              <Link to="/" className="nav-link" onClick={() => this.props.setCategory()}>CHANGE KATEGORI</Link>
            </li> */}
            <li>
              <Link style={{ display: this.props.is_login ? 'block' : 'none' }} to="/" className="btn btn-danger" onClick={() => this.props.postSignout()}>Keluar</Link>
            </li>
            <li>
              <Link style={{ display: this.props.is_login ? 'none' : 'block' }} to="/Signin" className="btn btn-success" onClick={() => this.props.checkState()}>Masuk</Link>
            </li>
          </ul>
          
        </div>
      </nav>
    );
  }
}

// const Navigation = props => {
//   const is_login = JSON.parse(localStorage.getItem("is_login"));
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light header1">
//       <img className="nav-logo" src={require("../logo/logo.svg")} alt=""/>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <Link to="/" className="nav-link">HOME</Link>
//           </li>
//         </ul>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to="/Football" className="nav-link">MOVIE</Link>
//           </li>
//           <li>
//             <Link to="/Profile" className="nav-link">Profile</Link>
//           </li>
//           <li>
//             <Link style={{ display: is_login ? 'block' : 'none' }} to="/" className="nav-link" onClick={() => props.postSignout()}>Keluar</Link>
//           </li>
//           <li>
//             <Link style={{ display: is_login ? 'none' : 'block' }} to="/Signin" className="nav-link" onClick={() => props.checkState()}>Masuk</Link>
//           </li>
//         </ul>
        
//       </div>
//     </nav>
//   );
// };
    

// EXPORT THE COMPONENT BODY
// export default Navigation; 
export default connect(
  "is_login", actions)
(withRouter(Navigation));
