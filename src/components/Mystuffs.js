import React,{useState,useEffect} from 'react';
import {Link , useNavigate} from "react-router-dom";
import axios from 'axios';
import Carousel from 'better-react-carousel';
import swal from 'sweetalert';

const MyStuffs =()=> {
  const navigate = useNavigate();
  const [mystufforiginals, setMystuffOriginals] = useState([]);
  const [mystufftvs, setMystuffTvs] = useState([]);
  const [mystuffanimes, setMystuffAnimes] = useState([]);
  const [mystuffmovies, setMystuffMovies] = useState([]);
  const [mystuffkids, setMystuffKids] = useState([]);

  const getMovies = async () => {
    try {
      let originals = await axios.get("https://prime-video-api.onrender.com/mystuff-originals")
      let tvs = await axios.get("https://prime-video-api.onrender.com/mystuff-tvs")
      let animes = await axios.get("https://prime-video-api.onrender.com/mystuff-animes")
      let movies = await axios.get("https://prime-video-api.onrender.com/mystuff-movies")
      let kids = await axios.get("https://prime-video-api.onrender.com/mystuff-kids")
      setMystuffOriginals(originals.data)
      setMystuffTvs(tvs.data)
      setMystuffAnimes(animes.data)
      setMystuffMovies(movies.data)
      setMystuffKids(kids.data)
    } catch (error) {
      console.log(error);
    }
  }

  const RemoveOriginal = async (a_o_id,title) =>{
    try {
      let result = await  axios.delete(`https://prime-video-api.onrender.com/mystuff-originals/${a_o_id}`);
      if(result) {
        swal(`${title} successfully deleted!`,"","success")
        navigate('/')
      }
  console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const RemoveTv = async (t_id,title) =>{
    try {
      let result = await  axios.delete(`https://prime-video-api.onrender.com/mystuff-tvs/${t_id}`);
      if(result) {
        swal(`${title} successfully deleted!`,"","success")
        navigate('/')
      }
  console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const RemoveMovie = async (m_id,title) =>{
    try {
      let result = await  axios.delete(`https://prime-video-api.onrender.com/mystuff-movies/${m_id}`);
      if(result) {
        swal(`${title} successfully deleted!`,"","success")
        navigate('/')      }
  console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const RemoveKid = async (k_id,title) =>{
    try {
      let result = await  axios.delete(`https://prime-video-api.onrender.com/mystuff-kids/${k_id}`);
      if(result) {
        swal(`${title} successfully deleted!`,"","success")
        navigate('/')      }
  console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const RemoveAnime = async (a_id,title) =>{
    try {
      let result = await  axios.delete(`https://prime-video-api.onrender.com/mystuff-animes/${a_id}`);
      if(result) {
        swal(`${title} successfully deleted!`,"","success")
        navigate('/')      }
  console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    getMovies()

  }, []);
    return(
        <>
        <p className='mystuff-heading'>MYSTUFF</p>
        
    <h3 className='carousel-heading'><Link to="/amazon-originals" style={{ "textDecoration": "none" }}>Amazon Originals <span className='glyphicon glyphicon-share-alt'></span></Link></h3>
      <Carousel className='carousel'cols={4} rows={1} gap={10} loop>
      {mystufforiginals.map(post =>(
      <Carousel.Item className='carousel-item'>
          <div className="container2">
            <div className="card" key={post._id}>
            <Link to={`/original-details/${post.a_o_id}`} key={post._id} style={{ "textDecoration": "none" }}>
              <div className="content">
                <div className="imgBx">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="contentBx">
                  <h4 key={post.id}>{post.title}</h4>
                </div>
              </div>
              </Link>
              <ul className="sci">
                <li>
                  <p>Rating : {post.rating}</p>
                  <p>Release Year : {post.releaseYear}</p>
                </li>
                <li><button onClick={(e)=>RemoveOriginal(post.a_o_id, post.title)} className='btn btn-danger'>Remove</button></li>
              </ul>
            </div>
          </div>
      </Carousel.Item>
      ))}
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>


    <h3 className='carousel-heading'><Link to="/tv" style={{ "textDecoration": "none" }}>Tv Shows <span className='glyphicon glyphicon-share-alt'></span></Link></h3>
      <Carousel className='carousel'cols={4} rows={1} gap={10} loop>
      {mystufftvs.map(post =>(
      <Carousel.Item className='carousel-item'>
        
          <div className="container2">
            <div className="card" key={post._id}>
            <Link to={`/tv-details/${post.t_id}`} key={post._id} style={{ "textDecoration": "none" }}>
              <div className="content">
                <div className="imgBx">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="contentBx">
                  <h4 key={post.id}>{post.title}</h4>
                </div>
              </div>
              </Link>
              <ul className="sci">
                <li>
                  <p>Rating : {post.rating}</p>
                  <p>Release Year : {post.releaseYear}</p>
                </li>
                <li><button onClick={(e)=>RemoveTv(post.t_id, post.title)} className='btn btn-danger'>Remove</button></li>
              </ul>
            </div>
          </div>
        
      </Carousel.Item>
      ))}
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>


    <h3 className='carousel-heading'><Link to="/anime" style={{ "textDecoration": "none" }}>Animes <span className='glyphicon glyphicon-share-alt'></span></Link></h3>
      <Carousel className='carousel'cols={4} rows={1} gap={10} loop>
      {mystuffanimes.map(post =>(
      <Carousel.Item className='carousel-item'>
        
          <div className="container2">
            <div className="card" key={post._id}>
            <Link to={`/anime-details/${post.a_id}`} key={post._id} style={{ "textDecoration": "none" }}>
              <div className="content">
                <div className="imgBx">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="contentBx">
                  <h4 key={post.id}>{post.title}</h4>
                </div>
              </div>
              </Link>
              <ul className="sci">
                <li>
                  <p>Rating : {post.rating}</p>
                  <p>Release Year : {post.releaseYear}</p>
                </li>
                <li><button onClick={(e)=>RemoveAnime(post.a_id, post.title)} className='btn btn-danger'>Remove</button></li>
              </ul>
            </div>
          </div>
        
      </Carousel.Item>
      ))}
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>


    <h3 className='carousel-heading'><Link to="/movies" style={{ "textDecoration": "none" }}>Movies <span className='glyphicon glyphicon-share-alt'></span></Link></h3>
      <Carousel className='carousel'cols={4} rows={1} gap={10} loop>
      {mystuffmovies.map(post =>(
      <Carousel.Item className='carousel-item'>
        
          <div className="container2">
            <div className="card" key={post._id}>
            <Link to={`/movie-details/${post.m_id}`} key={post._id} style={{ "textDecoration": "none" }}>
              <div className="content">
                <div className="imgBx">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="contentBx">
                  <h4 key={post.id}>{post.title}</h4>
                </div>
              </div>
              </Link>
              <ul className="sci">
                <li>
                  <p>Rating : {post.rating}</p>
                  <p>Release Year : {post.releaseYear}</p>
                </li>
                <li><button onClick={(e)=>RemoveMovie(post.m_id, post.title)} className='btn btn-danger'>Remove</button></li>
              </ul>
            </div>
          </div>
        
      </Carousel.Item>
      ))}
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>


    <h3 className='carousel-heading'><Link to="/kids" style={{ "textDecoration": "none" }}>Kids Shows <span className='glyphicon glyphicon-share-alt'></span></Link></h3>
      <Carousel className='carousel'cols={4} rows={1} gap={10} loop>
      {mystuffkids.map(post =>(
      <Carousel.Item className='carousel-item'>
        
          <div className="container2">
            <div className="card" key={post._id}>
            <Link to={`/kids-details/${post.k_id}`} key={post._id} style={{ "textDecoration": "none" }}>
              <div className="content">
                <div className="imgBx">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="contentBx">
                  <h4 key={post.id}>{post.title}</h4>
                </div>
              </div>
              </Link>
              <ul className="sci">
                <li>
                  <p>Rating : {post.rating}</p>
                  <p>Release Year : {post.releaseYear}</p>
                </li>
                <li><button onClick={(e)=>RemoveKid(post.k_id, post.title)} className='btn btn-danger'>Remove</button></li>
              </ul>
            </div>
          </div>
        
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

export default MyStuffs;