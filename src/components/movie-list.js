import React from "react";

function MovieList(props) {
    return (
        <div>
            <h3>List The Movie in Databases :</h3>
            { props.movies && props.movies.map ((movie) => {
                return <p>{movie.title}</p>
            }) }
        </div>
    )
}

export default MovieList;