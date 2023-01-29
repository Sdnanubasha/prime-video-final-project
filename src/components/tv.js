import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tv = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://prime-video-api.onrender.com/amazon-tv")
      .then((res) => {
        setPosts(res.data);
        console.warn(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
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
                  src="https://i.ibb.co/PzHMd8F/Good-night-oppy.jpg"
                  alt="Los Angeles"
                />
              </div>

              <div className="item">
                <img
                  src= "https://i.ibb.co/rfNzMwy/Family-man.jpg"
                  alt="Chicago"
                />
              </div>

              <div className="item">
                <img
                  src="https://i.ibb.co/NCTLVJf/The-boys.jpg"
                  alt="New york"
                />
              </div>
              <div className="item">
                <img
                  src="https://i.ibb.co/gmNPpJD/just-add-magic.jpg"
                  alt="New york"
                />
              </div>
              <div className="item">
                <img
                  src="https://i.ibb.co/SvXzLc1/The-rings-of-power.jpg"
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
        <h2>Tv Shows </h2>
        {posts.map(post =>(
        <Link to={`/tv-details/${post.t_id}`} key={post._id} style={{ "textDecoration": "none" }}>
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

export default Tv;
