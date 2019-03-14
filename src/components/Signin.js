import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import { connect } from "unistore/react";
import { actions } from '../store'
import { Redirect } from "react-router-dom";


class Signin extends Component {
    doLogin = () => {
        this.props.postLogin().then(()=> {
            this.props.history.replace("/profile");
            // return <Redirect to={{ pathname: "/signin" }} />;
        });
    };
    
    render() {
        return (
            <div className="article-content-wrapper row info-box">
                <section className="content signin">
                    <formm onSubmit={e => e.preventDefault()} className="signin-form">
                        <h4 className="login-title">SignIn</h4>
                        <div>
                            <label for="username" className="form-label">Email address:</label>
                            <input type="text" id="username" name="username" placeholder="Username" onChange={e => this.props.setField(e)} className="form-control" />
                        </div>
                        <div>
                            <label for="pw" className="form-label">Email address:</label>
                            <input type="password" id="pw" name="password" placeholder="Password" onChange={e => this.props.setField(e)} className="form-control" />
                        </div>
                        <button onClick={() => this.doLogin()} className="btn btn-primary signin-btn">Signin</button>
                        <button type="reset" className="btn btn-primary signin-btn">Reset</button>
                    </formm>
                </section>
            </div>
        );
    }      
}

export default connect(
    "is_login, email, full_name", actions)
(withRouter(Signin));