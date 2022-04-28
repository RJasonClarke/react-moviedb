import React from 'react';

const MovieCard = (props) => {
    const {title, image, release_date} = props.movie
    return (
        <div className="movie-card" id="movie-1">
            <img src={image} alt="movie-poster" className="movie-image"/>
            <h3>{title}</h3>
            <h4>{release_date}</h4>
        </div>
    );
};

export default MovieCard;