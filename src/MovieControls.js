import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";


export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    
  } = useContext(GlobalContext);

  return(
  <div className="inner-card-controls">
  {type === "movielist" && (
    <>
      
      <button
       
        onClick={() => removeMovieFromWatchlist(movie.id)}
      >
        <i className="fa-fw fa fa-times"></i>
      </button>
    </>
  )}

 
   </div>
  );

};