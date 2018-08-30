import React, { Component} from "react";
import "./../css/Notecard.css";
import Task from "./Task.js";

class Notecard extends Component{
  render(){
    return(
      <div className="notecard-container">
        <div className="notecard">
          <div className="note-checkbox">
            <i className="material-icons font-large checked-note">check_circle</i>
            <i className="material-icons font-large unchecked-note">check_circle_outline</i>
          </div>
          <div contenteditable="true" className="note-title" placeholder="Title"/>
          <div className="task-list">
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <button className="add-task-button">
              <i className="material-icons font-large">add_box</i>
              <span className="font-large"></span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Notecard;
