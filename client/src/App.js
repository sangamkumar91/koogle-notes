import React, { Component} from "react";
import "./App.css";
import Header from "./components/Header.js"
import Pinboard from "./components/Pinboard.js"

class App extends Component{
  render(){
    return(
      <div className="app">
        <Header/>
        <Pinboard/>
      </div>
    );
  }
}

export default App;
