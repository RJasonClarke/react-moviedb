import React from 'react';

const MovieCard = (props) => {
    const {title, tagline, overview} = props.movie
    return (
        <div className="movie-card" id={title}>
            <h3>{title}</h3>
            <img className= "movie-image" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSor8IGjk4o_CD4Tc6I4JQL3AFKtSpaMr_YvsbWmZ4kfNqiORHO"></img>
            <h4>{tagline}</h4>
            <h4>{overview}</h4>
        </div>
    );
};

export default MovieCard;