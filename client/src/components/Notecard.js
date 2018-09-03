import React, { Component} from "react";
import "./../css/Notecard.css";
import Task from "./Task.js";

async function addNewTasks(){

}

class Notecard extends Component{

  constructor(props) {
    super(props);
    this.state = {
      taskList: props.taskList
    };
  }

  async addTask(noteId,text){
    const resp = await fetch(`http://localhost:8080/addTask/${noteId}`);
    const dataPromise = await resp.json();
    const payload = await dataPromise;
    this.setState({
      taskList: payload.taskList
    });
  }

  async editTask(taskIndex,status,text){
    const {
      noteId
    } = this.props;
    const resp = await fetch(`http://localhost:8080/updateTask/${taskIndex}/${noteId}/${status}/${text}`);
    const dataPromise = await resp.json();
    const payload =  await dataPromise;
    this.setState({
      taskList: payload.taskList
    });
  }

  async deleteTask (taskIndex){
    const {
      noteId
    } = this.props;
    const resp = await fetch(`http://localhost:8080/deleteTask/${taskIndex}/${noteId}`);
    const dataPromise = await resp.json();
    const payload =  await dataPromise;
    console.log(payload);
    this.setState({
      taskList: payload.taskList
    });

  }

  render(){
    const {
      taskList
    } = this.state;
    const {
      noteId
    } = this.props;

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
              taskList.map((task,index) =>
              <Task key={"key-"+index}
                    taskIndex={index}
                    editTask={this.editTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                    task={task}
              />)
            }
            <button className="add-task-button" onClick={e => this.addTask(noteId)}>
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
