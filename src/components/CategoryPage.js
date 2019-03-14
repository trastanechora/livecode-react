// LIST IMPORT MODULE
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from '../store'

// COMPONENT BODY
class CategoryPage extends Component {
  render() {
    // console.log("Cek is_login from navbar", this.props.is_login)
    return (
      // <div className=" row ">
      <div className="article-content-wrapper row col-md-12">
        <div className="col-md-3">
        <div className="full-width">
          <img className="category-img" src={require("../img/romance.jpg")} alt=""/>
        </div>
          <Link to="/romance" className="btn btn-primary padd">ROMANCE</Link>
        </div>
        <div className="col-md-3">
          <img className="category-img" src={require("../img/action.jpg")} alt=""/>
          <Link to="/action" className="btn btn-primary padd">ACTION</Link>
        </div>
        <div className="col-md-3">
          <img className="category-img" src={require("../img/fiction.jpg")} alt=""/>
          <Link to="/fiction" className="btn btn-primary padd">FICTION</Link>
        </div>
        <div className="col-md-3">
         <img className="category-img" src={require("../img/comedy.jpg")} alt=""/>
          <Link to="/comedy" className="btn btn-primary padd">COMEDY</Link>
        </div>
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/romance" className="nav-link">ROMANCE</Link>
            </li>
            <li className="nav-item active">
              <Link to="/action" className="nav-link">ACTION</Link>
            </li>
            <li className="nav-item active">
              <Link to="/action" className="nav-link">FICTION</Link>
            </li>
            <li className="nav-item active">
              <Link to="/action" className="nav-link">COMEDY</Link>
            </li>
          </ul> */}
      </div>
      // </div>
    );
  }
}

// EXPORT THE COMPONENT BODY
export default CategoryPage; 
// export default connect(
//   "is_login", actions)
// (withRouter(CategoryPage));
