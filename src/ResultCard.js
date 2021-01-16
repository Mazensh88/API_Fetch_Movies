import React, { useContext } from "react";
//import Moment from "react-moment";
import {GlobalContext} from './GlobalState';
import AppReducer from "./AppReducer";

export const ResultCard = ({ movie }) => {
  const{addMovieToSelectedList,removeMovieList, movielist} = useContext(GlobalContext);
  let storedMovie = movielist.find (o => o.imdbID === movie.imdbID);

  const movielistDisapled = storedMovie ? true : false;

  return (
    
    <div>
        <h3>{movie.Title}
        
        <button
        disabled={movielistDisapled}
        onClick={()=> addMovieToSelectedList(movie)}>
              Nominate
        </button>
       
       
        </h3>
        
        
   </div>
  
  );
};