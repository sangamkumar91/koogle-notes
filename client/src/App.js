import React, { Component} from "react";
import "./App.css";
import Header from "./components/Header.js"
import Pinboard from "./components/Pinboard.js";
import { Provider } from "react-redux";
import store from "./store.js";

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <div className="app">
          <Header/>
          <Pinboard/>
        </div>
      </Provider>
    );
  }
}

export default App;
