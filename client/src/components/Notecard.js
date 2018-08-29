import React, { Component} from "react";
import "./../css/Notecard.css";

class Notecard extends Component{
  render(){
    return(
      <div className="notecard-container">
        <div className="notecard">
          <input type="text" className="note-title"/>
          <div className="task-list"></div>
        </div>
      </div>
    );
  }
}

export default Notecard;
