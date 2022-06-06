import React from 'react';

const Test = (props) => {

    console.log({props})
    if(props.props === undefined){
        return(
            <div></div>
        )
    } else {
        return (
            <div>
                <h2>{props.props.title}</h2> 
            </div>
        );
    }
};

export default Test;