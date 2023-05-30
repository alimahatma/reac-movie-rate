import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [movies, setMovie]= useState([]);


  // code for list and Query RestAPI from Server 
  // in this is case i'm using Djago framewor become RestAPi

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies/", {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization':'Token 7a09e31c3b97cddec2a066564fbb82a6fbe4f4a9'
		}
	})
  .then( resp => resp.json())
	.then( resp => setMovie(resp))
	.catch( error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>

        <div className='layout'>
          <div>
            { movies.map( (movie) => {
              return <h3>{movie.title} : {movie.description}</h3>
            })}
          </div>
          <div>Movie detail</div>
        </div>

    </div>
  );
}

export default App;
