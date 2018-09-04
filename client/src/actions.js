import { EDIT_NOTE, EDIT_PINBOARD } from 'constants/actions';

async addTask(noteId){
  return async dispatch => {
    const resp = await fetch(`http://localhost:8080/addTask/${noteId}`);
    const dataPromise = await resp.json();
    const payload =  await dataPromise;
    dispatch({
      note: payload,
      type: EDIT_NOTE
    });
  }
}

async editTask(taskIndex,status,text,noteId){
  return async dispatch => {
    const resp = await fetch(`http://localhost:8080/updateTask/${taskIndex}/${noteId}/${status}/${text}`);
    const dataPromise = await resp.json();
    const payload =  await dataPromise;
    dispatch({
      note: payload,
      type: EDIT_NOTE
    });
  }
}

async deleteTask(taskIndex, noteId){
  return async dispatch => {
    const resp = await fetch(`http://localhost:8080/deleteTask/${taskIndex}/${noteId}`);
    const dataPromise = await resp.json();
    const payload =  await dataPromise;
    dispatch({
      note: payload,
      type: EDIT_NOTE
    });
  }
}

async addNote(){
  return async dispatch => {
    const resp = await fetch('http://localhost:8080/addNote');
    const dataPromise = await resp.json();
    const payload = await dataPromise;
    dispatch({
      notes: payload,
      type: EDIT_PINBOARD
    });
  }
}

async deleteNote(noteId){
  return async dispatch => {
    const resp = await fetch(`http://localhost:8080/deleteNote/${noteId}`);
    const dataPromise = await resp.json();
    const payload =  await dataPromise;
    dispatch({
      notes: payload,
      type: EDIT_PINBOARD
    });
  }
}

async fetchNotes(){
  return async dispatch => {
    const resp = await fetch('http://localhost:8080/notes');
    const dataPromise = await resp.json();
    const payload = await dataPromise;
    dispatch({
      notes: payload,
      type: EDIT_PINBOARD
    });
  }
}
