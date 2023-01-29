import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://prime-video-api.onrender.com/amazon-movies")
      .then((res) => {
        setPosts(res.data);
        console.warn(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div className="container1">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <img
                  src="https://i.ibb.co/HNvQGp3/300-movie.jpg"
                  alt="Los Angeles"
                />
              </div>

              <div className="item">
                <img
                  src="https://i.ibb.co/kmWtv5P/avengers.jpg"
                  alt="Chicago"
                />
              </div>

              <div className="item">
                <img
                  src="https://i.ibb.co/BtkyHKG/jujutsu-kaisen-movie.webp"
                  alt="New york"
                />
              </div>
              <div className="item">
                <img
                  src="https://i.ibb.co/fDH2GD7/kgf.jpg"
                  alt="New york"
                />
              </div>
              <div className="item">
                <img
                  src="https://i.ibb.co/HB6wPn8/puspa.jpg"
                  alt="New york"
                />
              </div>
            </div>

            <a
              className="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <>
        <h2>Movies </h2>
        {posts.map(post =>(
        <Link to={`/movie-details/${post.m_id}`} key={post._id} style={{ "textDecoration": "none" }}>
          <div className="container2 col-md-3">
            <div className="card" key={post.id}>
              <div className="content">
                <div className="imgBx">
                  <img src={post.image} alt={posts.title} />
                </div>
                <div className="contentBx">
                  <h4 key={post.id}>{post.title}</h4>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <p>Rating : {post.rating}</p>
                  <p>Release Year : {post.releaseYear}</p>
                </li>

              </ul>
            </div>
          </div>
        </Link>
        ))}
      </>
    </>
  );
};

export default Movies;
