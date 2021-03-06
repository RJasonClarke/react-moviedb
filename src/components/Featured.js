import React from 'react';

const Featured = (props) => {

    if(props.props === undefined){
        return(
            <div>
            </div>
        )
    } else {
        return (
            <section className='featured'>
                <img src={`https://image.tmdb.org/t/p/original${props.props.backdrop_path}`} alt={props.props.title}/>
                <div className='featured-text'>
                    <h1 className='featured-title'>{props.props.title}</h1>
                    <span>
                        <strong className='featured-score'>{props.props.vote_average} points</strong>
                        <strong className='featured-date'>  {props.props.release_date.split("").slice(0, -6).join("")}</strong>
                    </span>
                    <p className='featured-overview'>{props.props.overview}</p>
                    <span>
                        <button>Play</button>
                        <button>+ My List</button>
                    </span>
                </div>
            </section>
        );
    }
};

export default Featured;

// adult: false
// backdrop_path: "/7ucaMpXAmlIM24qZZ8uI9hCY0hm.jpg"
// genre_ids: (3) [14, 12, 28]
// id: 338953
// original_language: "en"
// original_title: "Fantastic Beasts: The Secrets of Dumbledore"
// overview: "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers."
// popularity: 9783.591
// poster_path: "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"
// release_date: "2022-04-06"
// title: "Fantastic Beasts: The Secrets of Dumbledore"
// video: false
// vote_average: 6.8
// vote_count: 1302