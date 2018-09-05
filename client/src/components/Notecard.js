import React, { Component} from "react";
import "./../css/Notecard.css";
import Task from "./Task.js";
import { connect } from "react-redux";
import { addTask, editTask, deleteTask } from './../actions.js'


class Notecard extends Component{

  constructor(props) {
    super(props);
  }

  onDeleteNote(){
    const {
      noteId,
      deleteNote
    } = this.props;

    deleteNote(noteId);
  }

  editTask = () => {
    
  }

  render(){

    const {
      addTask,
      taskList,
      noteId
    } = this.props;

    return(
      <div className="notecard-container">
        <div className="notecard">
          <div className="note-delete">
            <i className="material-icons font-xlarge" onClick={(e) => this.onDeleteNote(e)}>cancel</i>
          </div>
          <div contentEditable="true" className="note-title" placeholder="Title"/>
          <div className="task-list">
            {
              taskList.map((task,index) =>
                <Task
                  key={"key-"+index}
                  taskIndex={index}
                  editTask={(taskIndex,status,text) => {
                      const noteId = this.props.noteId;
                      this.props.editTask(taskIndex,status,text, noteId);
                    }
                  }
                  deleteTask={(index) => {
                      const noteId = this.props.noteId;
                      this.props.deleteTask(index, noteId);
                    }
                  }
                  task={task}
                />
              )
            }
            <button className="add-task-button" onClick={(e) => addTask(noteId)}>
              <i className="material-icons font-large">add_box</i>
              <span className="font-large"></span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, myOwnProps) => {
  const note = state.notes[myOwnProps.noteId];
  return note;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (noteId) => {
      dispatch(addTask(noteId));
    },
    deleteTask: (index, noteId) => {
      dispatch(deleteTask(index, noteId));
    },
    editTask: (taskIndex,status,text,noteId) => {
      dispatch(editTask(taskIndex,status,text,noteId));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notecard);
