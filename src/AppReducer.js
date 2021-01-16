export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_MOVIELIST":
      return{
        ...state,
        movielist: [action.payload, ...state.movielist]
      };
    
    default:
      return state;
  }

};