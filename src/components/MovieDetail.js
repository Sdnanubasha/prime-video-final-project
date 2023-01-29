import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams , Link } from "react-router-dom";

const MovieDetail = () => {

    let {movieID} = useParams();
    const [movie, setMovie] = useState(null)
    useEffect(()=>{
        getMovie();
    },[movieID])
    
    const AddToMystuff = async () =>{
      try {
        let result = await movie.map(post =>( axios.post(`https://prime-video-api.onrender.com/mystuff-movies?id=${post.m_id}`)))
        if(result) {
          movie.map (post => alert(`${post.title} successfully added to mystuff`))
        }
    console.log(result);
      } catch (error) {
        console.log(error);
      }
  }

    const getMovie = async () => {
        try {
            let res = await axios.get(`https://prime-video-api.onrender.com/amazon-movies?id=${movieID}`);
                setMovie(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    console.log(movie);

  return (
    <div className="container-detail">
      <div className="movie-details">
        <ul>
            { movie ? <>
                {movie.map(post=>(
          <li key={post.id+post.title}>
            <div className="gradient"
              style={{
                backgroundImage:
                  `url(${post.image})`,
                height: "700px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backdropFilter:"blur(true)"

              }}
            >
              <div className="movie-part col-md-12">
                <ul className="movie-item">
                  <div className="col-lg-4">
                    <img
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                  <div className="col-md-6">
                  <p><b>Title : </b>{post.title}</p>
                  <p><b>Rating : </b> {post.rating}</p>
                  <p><b>releaseYear : </b> {post.releaseYear}</p>
                  <p><b>Description : </b>{post.description}</p>
                    <Link to="#" onClick={ () => AddToMystuff() }><button className="btn btn-primary">Add to Mystuff</button></Link>
                    <Link to="/movies"><button className="btn btn-danger">Back</button></Link>
                  </div>
                </ul>
              </div>
            </div>
          </li>
          ))}
        </> 
        :
        <></>    
        }
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
