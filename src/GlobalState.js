import React, { createContext, useReducer, useEffect } from "react";

import AppReducer from "./AppReducer";

// initial state
const initialState = {
    movielist:  localStorage.getItem('movielist') ? JSON.parse(localStorage.getItem('movielist')): [],
    
  
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider  = (props) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    useEffect(() =>{
        localStorage.setItem('movielist', JSON.stringify(state.movielist));
    }, [state]);
    //actions
    const addMovieToSelectedList =(movie) => {
        dispatch({type: "ADD_MOVIE_TO_MOVIELIST", payload: movie});
    }

    

    return(
        <GlobalContext.Provider value={{
            movielist: state.movielist,
            
            addMovieToSelectedList: addMovieToSelectedList,
            
             }}>
        {props.children}
        </GlobalContext.Provider>
    )
};
