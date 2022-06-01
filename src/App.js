import React, {Component} from "react";
import "./App.css"
import Header from "./components/Header";

// https://api.themoviedb.org/3/movie/popular?api_key=1f441d16d9e32be5307f53437c47ba03&

class App extends Component{

  render(){

    return (
      <Header></Header>
    );
  }
}

export default App;
