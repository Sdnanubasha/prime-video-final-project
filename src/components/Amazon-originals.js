import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Amazonoriginals = () => {
  const [posts, setPosts] = useState([]);

  const getMovies = async () => {
    try {
      let res = await axios.get("https://prime-video-api.onrender.com/amazon-originals")

      setPosts(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    getMovies()

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
                  src="https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg"
                  alt="Los Angeles"
                />
              </div>

              <div className="item">
                <img
                  src="https://w0.peakpx.com/wallpaper/211/433/HD-wallpaper-brave-poster-movie-girl-redhead-merida-princess-disney.jpg"
                  alt="Chicago"
                />
              </div>

              <div className="item">
                <img
                  src="https://cdn.oneesports.gg/cdn-data/2022/03/Bubble_AnimeNetflixMoviePOster.jpg"
                  alt="New york"
                />
              </div>
              <div className="item">
                <img
                  src="https://sportshub.cbsistatic.com/i/2022/07/11/645eb0c7-fe41-41bb-a47e-5b37b022cb07/one-piece-red-imax-movie-poster.jpg"
                  alt="New york"
                />
              </div>
              <div className="item">
                <img
                  src="https://wallpaperaccess.com/full/529912.jpg"
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
        <h2>Amazon Originals</h2>
        {posts.map(post =>(
        <Link to={`/original-details/${post.a_o_id}`} key={post.id+post.title} style={{ "textDecoration": "none" }}>
          <div className="container2 col-md-3">
            <div className="card" key={post.id}>
              <div className="content">
                <div className="imgBx">
                  <img src={post.image} alt={post.title} />
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

export default Amazonoriginals;
