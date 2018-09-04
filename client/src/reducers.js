import { EDIT_NOTE,EDIT_PINBOARD } from 'constants/actions';
const initialState = {
  notes : {}
}

export default function (state, action) {

  if(typeof state === 'undefined'){
    return initialState;
  }

  switch(action.type){
    case EDIT_NOTE:
      const note = action.note;
      const noteId = action.noteId;
      const notes = Object.assign({}, state.notes);
      notes[noteId] = note;
      return {...state, notes};
      break;
    case EDIT_PINBOARD:
      const notes = action.notes;
      return {...state, notes};
      break;
    default:
      return state;
      break;
  }

}
