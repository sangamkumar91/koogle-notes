import React, { Component} from "react";
import "./../css/Task.css";

class Task extends Component{
  constructor(props){
    super(props);
    this.state = {
      task : this.props.task
    }
  }

  changeValue(e){
    const task = this.state.task;
    task.value = e.target.innerHTML;
    this.setState({
      task
    })
    //this.props.editTask(this.props.taskIndex,0,task.value || task.value !== '' ? task.value : 'null');
  }


  render(){
    const {
      taskIndex,
      editTask,
      deleteTask
    } = this.props;
    const {
      task
    } = this.state;

    return(
      <div className="task">
        <button className="task-complete" onClick={() => editTask(taskIndex,1,task.value)}>
          <i className="material-icons font-large">check_box_outline_blank</i>
        </button>
        <div
          contentEditable="true"
          suppressContentEditableWarning="true"
          type="text"
          className="task-input"
          placeholder="..."
          onKeyUp={(e) => this.changeValue(e)}
        >
          {task.value}
        </div>
        <div className="task-delete" onClick={() => deleteTask(taskIndex)}>
          <i className="material-icons font-large">cancel</i>
        </div>
      </div>
    );
  }
}

export default Task;
