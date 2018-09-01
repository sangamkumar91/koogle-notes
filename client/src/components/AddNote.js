import React, {Component} from 'react';
import './../css/AddNote.css';

class AddNote extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {
      showMsg,
      addNote
    } = this.props;

    return(
      <div className={ "add-note-container " + (!showMsg ? "no-msg" : "") } onClick={addNote}>
        <div className="add-note-icon">
          <i className="material-icons">playlist_add</i>
        </div>
        { showMsg &&
          <div>
            <div className="welcome-msg"> Welcome! </div>
            <div className="add-note-msg"> Add your first note. </div>
          </div>
        }
      </div>
    );
  };
}

export default AddNote;
