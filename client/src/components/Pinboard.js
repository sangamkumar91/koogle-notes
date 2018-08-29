import React, { Component} from "react";
import "./../css/Pinboard.css";
import Notecard from "./Notecard.js"

class Pinboard extends Component{
  render(){
    return(
      <div className="pinboard">
        <div className="notecard-list">
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        </div>
      </div>
    );
  }
}

export default Pinboard;
