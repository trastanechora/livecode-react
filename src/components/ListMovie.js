import React from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';

const ListMovie = props => {
    return (
        <div className="blog-item">
            <div className="col-md-12 blog-photo">
                <img className="blog-img" src={props.poster} alt=""/>
            </div>
            <div className="col-md-12 container wrapping-content-news">
                <h4 className="blog-title">{props.title}</h4>
                <hr />
                <p class="blog-paragraf">{props.synopsis}</p>
                <br/>
                <small>{props.publishedAt}</small>
            </div>
        </div>
    );
};


export default ListMovie;