import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../constants/noteconstant";
import { v4 as uuidv4 } from "uuid";

const addnotes = (notes) => async (dispatch) =>
  dispatch({
    type: ADD_NOTE,
    notes: notes.note,
    title: notes.title,
    id: uuidv4(),
    date: new Date().toDateString(),
  });

const editnotes = ({ id, note, title }) => async (dispatch) => {
  await dispatch({ type: EDIT_NOTE, id, note, title });
};

const deletenotes = (id) => ({
  type: DELETE_NOTE,
  id,
});

export { addnotes, deletenotes, editnotes };
