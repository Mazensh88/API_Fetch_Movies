
import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {ResultCard} from "./ResultCard";
import {MovieCard} from "./MovieCard";
import {GlobalProvider,GlobalContext} from "./GlobalState";
import { useContext } from 'react';
 
function App() {
  const {movielist} = useContext(GlobalContext);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);

    const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=bea9b037`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setResponse(data.Search);
          
        } else {
          setResponse([]);
        }
      });
  };



  return (
    <div>
     <GlobalProvider>
    <div>
          <div>
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
              
            />
          </div>
          <div>
          {response.length > 0 && (
            <ul className="results">
              {response.map((movie, Search)=>(
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
          </div>
    </div> 
    </GlobalProvider>
    <div>
      <h1>Nominated </h1>
      <div>
      <ul>
      {movielist.map((movie) =>(
      <li key={movie.imdbID}>
        <MovieCard movie={movie} />
        
      </li>
      ))}
      </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
