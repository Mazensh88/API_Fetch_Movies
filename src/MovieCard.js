//import React from "react";
import { MovieControls } from "./MovieControls";
import React, { useContext,useState, useEffect } from "react";
import { GlobalContext } from "./GlobalState";



export const MovieCard = ({movie, type}) => {
  const{removeMovieList, movielist} = useContext(GlobalContext);
 
  return (
    <div >
      
      <h3>{movie.Title}</h3>
      <MovieControls type={type} movie={movie} > Remove </MovieControls>
        
    </div>
  );
};