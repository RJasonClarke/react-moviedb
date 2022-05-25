import React from 'react';

const MovieCard = (props) => {
    const {title, poster_path, tagline, overview} = props.movie
    return (
        <div className="movie-card" id={title}>
            <h3>{title}</h3>
            <img className= "movie-image" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}></img>
            <h4>{tagline}</h4>
            <h4>{overview}</h4>
        </div>
    );
};

export default MovieCard;