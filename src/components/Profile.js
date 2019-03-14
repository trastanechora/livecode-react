import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from '../store'

class Profile extends Component {
    render() {
        if (!this.props.is_login) {
            return <Redirect to={{ pathname: "/signin" }} />;
        } else {
            return (
                <div >
                    <section className="article-content-wrapper row info-box">
                        <div className="col-md-4 padding-5">
                            <img className="blog-img" src={this.props.avatar} alt=""/>
                        </div>
                        <div className="col-md-8 blog-photo padding-5">
                            <h1 style={{textalign: "center"}}>Profile</h1>
                            <p>
                                <label className="form-label">Name:</label> <br />
                                <strong><i>{this.props.username}</i></strong>
                            </p>
                            <p>
                                <label className="form-label">Email:</label> <br />
                                <strong><i>{this.props.email}</i></strong>
                            </p>
                        </div>
                    </section>
                </div>
            );
        }
    }
}

// export default Profile;
export default connect(
    "avatar, email, username, is_login", actions)
(withRouter(Profile));