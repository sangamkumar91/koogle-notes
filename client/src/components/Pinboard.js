import React, { Component} from "react";
import "./../css/Pinboard.css";
import Notecard from "./Notecard.js"

class Pinboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
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
