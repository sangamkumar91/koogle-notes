import React, { Component} from "react";
import "./../css/Pinboard.css";
import Notecard from "./Notecard.js"
import AddNote from "./AddNote.js"

class Pinboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    this.fetchNotes();
  }

  async fetchNotes(){
    const resp = await fetch('http://localhost:8080/notes');
    const dataPromise = await resp.json();
    const payload = await dataPromise;
    this.setState({
      notes: Object.values(payload)
    });
  }

  addNote(){
    const {
      notes
    } = this.state;
    notes.push({
      taskList: []
    });
    this.setState({
      notes
    });
  }

  renderNotes(){
    const {
      notes
    } = this.state;

    if (notes.length) {
      const notesList = notes.map((note, index) => <Notecard key={`note-${index}`} taskList={note.taskList} />);
      notesList.push(<div key="add-list" className="add-note-wrapper"><AddNote showMsg={false} addNote={e => this.addNote(e)}/></div>);
      return notesList;
    } else {
      return <div className="add-note-wrapper-empty"><AddNote showMsg={true} onClick={e => this.addNote(e)}/></div>;
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

export default Pinboard;
