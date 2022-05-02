import React from 'react';

const MovieCard = (props) => {
    const {title, tagline} = props.movie
    return (
        <div className="movie-card" id={title}>
            <h3>{title}</h3>
            <h4>{tagline}</h4>
        </div>
    );
};

export default MovieCard;