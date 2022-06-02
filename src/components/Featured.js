import React from 'react';

const Featured = ({props}) => {

    console.log(props)

    return (
        <div>
            <h1>Featured goes here...</h1>
            {props.map(movie => <li>{movie.title}</li>)}
        </div>
    );
};

export default Featured;