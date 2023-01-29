import React from 'react';
import {Routes, Route} from "react-router-dom";
import Amazonoriginals from './Amazon-originals';
import Home from './home';
import Movies from './movies';
import Tv from './tv';
import Kids from './kids';
import Anime from './anime';
import Signin from './signin';
import Signup from './signup';
import Mystuffs from './Mystuffs';
import PrivateComponent from './PrivateComponent';
import OriginalDetails from './OriginalDetail';
import AnimeDetails from './AnimeDetail';
import MovieDetails from './MovieDetail';
import TvDetails from './TvDetail';
import KidsDetails from './KidsDetail';


const Routers =() =>{
    return(
        <>
        <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route element={<PrivateComponent/>}>
      <Route path="/original-details/:movieID" element={<OriginalDetails/>}></Route>
      <Route path="/anime-details/:movieID" element={<AnimeDetails/>}></Route>
      <Route path="/movie-details/:movieID" element={<MovieDetails/>}></Route>
      <Route path="/kids-details/:movieID" element={<KidsDetails/>}></Route>
      <Route path="/tv-details/:movieID" element={<TvDetails/>}></Route>
      <Route path="/amazon-originals" element={<Amazonoriginals/>}></Route>
      <Route path="/movies" element={<Movies/>}></Route>
      <Route path="/tv" element={<Tv/>}></Route>
      <Route path="/kids" element={<Kids/>}></Route>
      <Route path="/anime" element={<Anime/>}></Route>
      <Route path="/mystuff" element={<Mystuffs/>}></Route>
      <Route path="/logout" element={<></>}></Route>
      </Route>

      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      
    </Routes>
        </>
    );
}

export default Routers;