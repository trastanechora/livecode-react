// LIST IMPORT MODULE
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from '../store'

// COMPONENT BODY
class CategoryList extends Component {
  render() {
    // console.log("Cek is_login from navbar", this.props.is_login)
    return (
      <div className="col-md-12 row top-head box">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/romance" className="btn btn-light">ROMANCE</Link>
            </li>
            <li className="nav-item active">
              <Link to="/action" className="btn btn-light">ACTION</Link>
            </li>
            <li className="nav-item active">
              <Link to="/fiction" className="btn btn-light">FICTION</Link>
            </li>
            <li className="nav-item active">
              <Link to="/comedy" className="btn btn-light">COMEDY</Link>
            </li>
          </ul>
      </div>
    );
  }
}

    

// EXPORT THE COMPONENT BODY
export default CategoryList; 
// export default connect(
//   "is_login", actions)
// (withRouter(CategoryList));
