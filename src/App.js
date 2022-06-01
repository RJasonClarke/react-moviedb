import React, {Component} from "react";
import "./App.css"
import Header from "./components/Header";

class App extends Component{

  componentDidMount(){
    const apiKey = "1f441d16d9e32be5307f53437c47ba03&"
    const tmdb = "https://api.themoviedb.org/3"


    fetch(`${tmdb}/movie/popular?api_key=${apiKey}language=en-US&page=1`)
    .then(resp => resp.json())
    .then(data => console.log(data.results[0].title))
  }

  render(){
    return (
      <Header></Header>
    );
  }
}

export default App;
