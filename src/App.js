import React, {Component} from "react";
import "./App.css"
import Featured from "./components/Featured";
import Header from "./components/Header";
import Row from "./components/Row";

// https://api.themoviedb.org/3/movie/popular?api_key=1f441d16d9e32be5307f53437c47ba03

class App extends Component{

  state = {
    movies: []
  }

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=1f441d16d9e32be5307f53437c47ba03")
    .then(resp => resp.json())
    .then(data => this.setState({
      movies: data.results
    }))
}

  render(){
    return (
      <div>
        <Header></Header>
        <Featured props={this.state.movies}></Featured>
        <Row></Row>
      </div>
    );
  };
};

export default App;
