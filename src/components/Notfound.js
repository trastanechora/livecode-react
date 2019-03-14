import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from '../store'

class Notfound extends Component {
    render() {
            return (
                <div >
                    <section className="article-content-wrapper row info-box">
                            <h1 style={{textalign: "center"}} className="notfound">SORRY, Page Not Found!</h1>
                    </section>
                </div>
            );

    }
}

// export default Notfound;
export default connect(
    "avatar, email, username, is_login", actions)
(withRouter(Notfound));