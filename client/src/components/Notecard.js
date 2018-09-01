import React, { Component} from "react";
import "./../css/Notecard.css";
import Task from "./Task.js";

class Notecard extends Component{

  constructor(props) {
    super(props);
    this.state = {
      taskList: props.taskList
    };
  }

  addTask(){
    const {
      taskList
    } = this.state;
    taskList.push({
      value: ''
    });
    this.setState({
      taskList
    });
  }

  render(){
    const {
      taskList
    } = this.state;
    return(
      <div className="notecard-container">
        <div className="notecard">
          <div className="note-checkbox">
            <i className="material-icons font-large checked-note">check_circle</i>
            <i className="material-icons font-large unchecked-note">check_circle_outline</i>
          </div>
          <div contentEditable="true" className="note-title" placeholder="Title"/>
          <div className="task-list">
            {
              taskList.map((task,index) => <Task key={"key-"+index} task={task}/>)
            }
            <button className="add-task-button" onClick={e => this.addTask(e)}>
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
