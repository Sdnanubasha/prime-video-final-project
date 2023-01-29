import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Carousel from 'better-react-carousel'

const Dashboard =()=> {
        const [originals, setOriginals] = useState([]);
        const [tv, setTv] = useState([]);
        const [animes, setAnime] = useState([]);
        const [movies, setMovies] = useState([]);
        const [kids, setKids] = useState([]);

  const getMovies = async () => {
    try {
      let original = await axios.get("https://prime-video-api.onrender.com/amazon-originals")
      let tv = await axios.get("https://prime-video-api.onrender.com/amazon-tv")
      let anime = await axios.get("https://prime-video-api.onrender.com/amazon-anime")
      let movie = await axios.get("https://prime-video-api.onrender.com/amazon-movies")
      let kid = await axios.get("https://prime-video-api.onrender.com/amazon-kids")

      setOriginals(original.data)
      setTv(tv.data)
      setAnime(anime.data)
      setMovies(movie.data)
      setKids(kid.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    getMovies()

  }, []);
    return(
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
                  src="https://cdn.wallpapersafari.com/17/18/S9RNe3.jpg"
                  alt="Los Angeles"
                />
              </div>

              <div className="item">
                <img
                  src="https://wallup.net/wp-content/uploads/2016/03/09/53839-Spider-Man-movies-The_Amazing_Spider-Man.jpg"
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
      <h3 className='carousel-heading'><Link to="/amazon-originals" style={{ "textDecoration": "none" }}>Amazon Originals <span className='glyphicon glyphicon-share-alt'></span></Link></h3>
      <Carousel className='carousel'cols={4} rows={1} gap={10} loop>
      {originals.map(post =>(
      <Carousel.Item className='carousel-item'>
        <Link to={`/original-details/${post.a_o_id}`} key={post.id+post.title} style={{ "textDecoration": "none" }}>
          <div className="container2">
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
      </Carousel.Item>
      ))}
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>


    <h3 className='carousel-heading'><Link to="/tv" style={{ "textDecoration": "none" }}>Tv Shows <span className='glyphicon glyphicon-share-alt'></span></Link></h3>
      <Carousel className='carousel'cols={4} rows={1} gap={10} loop>
      {tv.map(post =>(
      <Carousel.Item className='carousel-item'>
        <Link to={`/tv-details/${post.t_id}`} key={post.id+post.title} style={{ "textDecoration": "none" }}>
          <div className="container2">
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
      </Carousel.Item>
      ))}
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>


    <h3 className='carousel-heading'><Link to="/anime" style={{ "textDecoration": "none" }}>Animes <span className='glyphicon glyphicon-share-alt'></span></Link></h3>
      <Carousel className='carousel'cols={4} rows={1} gap={10} loop>
      {animes.map(post =>(
      <Carousel.Item className='carousel-item'>
        <Link to={`/anime-details/${post.a_id}`} key={post.id+post.title} style={{ "textDecoration": "none" }}>
          <div className="container2">
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
      </Carousel.Item>
      ))}
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>


    <h3 className='carousel-heading'><Link to="/movies" style={{ "textDecoration": "none" }}>Movies <span className='glyphicon glyphicon-share-alt'></span></Link></h3>
      <Carousel className='carousel'cols={4} rows={1} gap={10} loop>
      {movies.map(post =>(
      <Carousel.Item className='carousel-item'>
        <Link to={`/movie-details/${post.m_id}`} key={post.id+post.title} style={{ "textDecoration": "none" }}>
          <div className="container2">
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
      </Carousel.Item>
      ))}
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>


    <h3 className='carousel-heading'><Link to="/kids" style={{ "textDecoration": "none" }}>Kids Shows <span className='glyphicon glyphicon-share-alt'></span></Link></h3>
      <Carousel className='carousel'cols={4} rows={1} gap={10} loop>
      {kids.map(post =>(
      <Carousel.Item className='carousel-item'>
        <Link to={`/kids-details/${post.k_id}`} key={post.id+post.title} style={{ "textDecoration": "none" }}>
          <div className="container2">
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
      </Carousel.Item>
      ))}
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
      </>
    );
}

export default Dashboard;