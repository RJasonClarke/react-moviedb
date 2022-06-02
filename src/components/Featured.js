import React from 'react';

const Featured = ({props}) => {

    console.log(props)

    return (
        <div>
            {props.map(movie =>
                    <div>
                        <h2>{movie.title}</h2>
                        <span>{movie.vote_average} {movie.release_date.split("").slice(0, -6).join("")}</span>
                        <p>{movie.overview}</p>
                        <span>
                            <button>Play</button>
                            <button>+ My List</button>
                        </span>
                    </div>
                )}
        </div>
    );
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