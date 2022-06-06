import React from 'react';

const Test = (props) => {

    console.log({props})
    return (
        <div key={props.props.id}>
                        <h2>{props.props.title}</h2>
                        <span>{props.props.vote_average} {props.props.release_date.split("").slice(0, -6).join("")}</span>
                        <p>{props.props.overview}</p>
                        <span>
                            <button>Play</button>
                            <button>+ My List</button>
                        </span>
                    </div>
    );
};

export default Test;