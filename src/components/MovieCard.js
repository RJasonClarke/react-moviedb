import React from 'react';

const MovieCard = (props) => {
    const {title, image, likes} = props.movie
    return (
        <div className="movie-card" id="movie-1">
            <img src={image} alt="movie-poster" className="movie-image"/>
            <h3>{title}</h3>
            <p>{likes}</p>
            <button className="like-bttn">❤️</button>
        </div>
    );
};

export default MovieCard;