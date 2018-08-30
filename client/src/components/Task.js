import React, { Component} from "react";
import "./../css/Task.css";

class Task extends Component{
  render(){
    return(
      <div className="task">
        <button className="task-complete">
          <i className="material-icons font-large">check_box_outline_blank</i>
        </button>
        <div contenteditable="true" type="text" className="task-input" placeholder="..."/>
      </div>
    );
  }
}

export default Task;
