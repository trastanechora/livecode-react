// LIST IMPORT MODULE
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "unistore/react";
import { actions } from '../store';
import { withRouter } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';

import ListMovie from '../components/ListMovie';
import CategoryList from '../components/CategoryList';


//MAIN CLASS
class Home extends Component {
  constructor (props) {
    super(props);
      this.state = {
        movieList: []
      };
  };

  componentDidMount = async () => {
    const self = this;
    // First Request
    axios
      .get("https://api-todofancy.herokuapp.com/api/movies")
      .then(function(response) {
        var results = [];
        var searchField = "Category";
        var searchVal = "romance";
        for (var i=0 ; i < response.data.movies.length ; i++)
        {
            if (response.data.movies[i][searchField] == searchVal) {
                results.push(response.data.movies[i]);
            }
        }
        self.setState({movieList: results});
        console.log(response.data.movies);
      })
      .catch(function(error) {
        console.log(error);
      }
    );
    // this.props.updateList(this.state.movieList);
  };


  render() {
    return (
      <div className="article-content-wrapper row">
        <div className="col-md-4">
          <div className="top-articles sticky-please">
            <div className="col-md-12 row top-head box">
              <div className="col-md-7 title-top"><strong>List Kategori</strong></div>
              {/* <div className="col-md-5 link-top"><a href="#">Lihat semua</a></div> */}
            </div>
            <CategoryList />
          </div>
        </div>
        <div className="col-md-8">
          {this.state.movieList.map((item, key) => {
            // console.log(item.Title)
            const title = item.Title !== null ? item.Title : "";
            const poster = item.Poster !== null ? item.Poster : "";
            const synopsis = item.Synopsis !== null ? item.Synopsis : "";
            return <ListMovie key={key} title={title} poster={poster} synopsis={synopsis} />
          })}
        </div>
      </div>
    );
  }
}

// export default Home;
export default connect(
  "movieList", actions)
(withRouter(Home));
