// LIST IMPORT MODULE
import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';


//MAIN CLASS
class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      A: [],
      B: "",
      C: true
    };
  }

  render() {
    return (
      <div className="article-content-wrapper row">
        <div className="col-md-4">
          <div className="top-articles sticky-please">
            <div className="col-md-12 row top-head box">
              <div className="col-md-7 title-top"><strong>BERITA TERKINI</strong></div>
              <div className="col-md-5 link-top"><a href="#">Lihat semua</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
