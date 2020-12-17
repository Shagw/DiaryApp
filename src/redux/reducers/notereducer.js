import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../constants/noteconstant";

const initialState = {
  data: [],
};

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        data: [
          ...state.data,
          {
            note: action.notes,
            id: action.id,
            title: action.title,
            date: action.date,
          },
        ],
      };
    case EDIT_NOTE:
      const notelist = state.data;
      const noteIndex = notelist.findIndex((t) => t.id === action.id);

      const dataobj = notelist[noteIndex];
      const newDataObj = { ...dataobj, note: action.note, title: action.title };

      const head = notelist.slice(0, noteIndex);
      const tail = notelist.slice(noteIndex + 1);

      const newTodos = [...head, newDataObj, ...tail];

      return {
        ...state,
        data: newTodos,
      };
    case DELETE_NOTE:
      const notes = state.data.filter((note) => note.id !== action.id);
      return {
        ...state,
        data: notes,
      };
    default:
      return state;
  }
};
