import React from "react";

function MovieList(props) {

    const movieClicked = movie => evt =>{
        props.movieClicked(movie)
    }

    return (
        <div>
            <h3>List The Movie in Databases :</h3>
            { props.movies && props.movies.map ((movie) => {
                return (
                    <div key={movie.id}>
                        <p onClick={movieClicked(movie)}>{movie.title}</p>
                    </div>
                ) 
            }) }
        </div>
    )
}

export default MovieList;