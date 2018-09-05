import React, { Component} from "react";
import "./../css/Pinboard.css";
import Notecard from "./Notecard.js";
import AddNote from "./AddNote.js";
import { connect } from "react-redux";
import { fetchNotes, deleteNote, addNote } from './../actions.js'

class Pinboard extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchNotes();
  }

  renderNotes(){
    const notes = Object.values(this.props.notes);
    const {
      deleteNote,
      addNote
    } = this.props;

    if (notes.length) {
      const notesList = notes.map((note, index) =>
        <Notecard
          key={`note-${index}`}
          noteId={note.noteId}
          deleteNote={(noteId) => deleteNote(noteId)}
        />
      );
      notesList.push(<div key="add-list" className="add-note-wrapper"><AddNote showMsg={false} addNote={e => addNote(e)}/></div>);
      return notesList;
    } else {
      return <div className="add-note-wrapper-empty"><AddNote showMsg={true} addNote={e => addNote(e)}/></div>;
    }
  }

  render(){

    return (
      <div className="pinboard">
        <div className="notecard-list">
        { this.renderNotes() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes : () => {
      dispatch(fetchNotes());
    },
    deleteNote : (noteId) => {
      dispatch(deleteNote(noteId));
    },
    addNote : () => {
      dispatch(addNote());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pinboard);
