import React, { Component} from "react";
import "./../css/Task.css";

class Task extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {
      task
    } = this.props;
    return(
      <div className="task">
        <button className="task-complete">
          <i className="material-icons font-large">check_box_outline_blank</i>
        </button>
        <div
          contentEditable="true"
          suppressContentEditableWarning="true"
          type="text"
          className="task-input"
          placeholder="..."
        >
          {task.value}
        </div>
      </div>
    );
  }
}

export default Task;
