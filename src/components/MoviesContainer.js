import React, { Component } from 'react';
import MovieCard from './MovieCard';
// import movies from '../api';

class MoviesContainer extends Component{

    state = {
        movies: []
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/550?api_key=1f441d16d9e32be5307f53437c47ba03")
        .then(resp => resp.json())
        .then(data => this.setState({
            movies: data
        }))
    }

    render(){

        const {movies} = this.state;

        return (
            <div>
                <h2>Movie Database</h2>
                <div>
                    <input type="text" placeholder="Search a movie..." />
                    <button>Go</button>
                </div>
                <div>
                    <h3>{movies.title}</h3>
                </div>
            </div>
        );
    }
}

export default MoviesContainer;