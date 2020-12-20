import React, { Component } from "react";
import { parse } from "uuid";

class NotesListTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { month, year } = this.props;
    month = parseInt(month);
    year = parseInt(year);
    let allnotes = this.props.allnotes;
    let sortedArraybymonth = allnotes.filter(function (note) {
      return (
        note.date.getMonth() + 1 === month && note.date.getFullYear() === year
      );
    });
    allnotes = sortedArraybymonth;
    console.log(this.props, sortedArraybymonth, month, year);
    return (
      <>
        <ul className="allnotes">
          {allnotes.length !== 0 && (
            <table className="table" style={{ width: "100%" }}>
              <tr>
                <th>Created On</th>
                <th>Title</th>
                <th>Notes</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>

              {allnotes.map((notes, index) => (
                <tr key={index}>
                  <td>{notes.date.toLocaleString()}</td>
                  <td>{notes.title}</td>
                  <td>{notes.note}</td>
                  <td>
                    <button
                      className="editButton"
                      onClick={this.props.handleeditbutton(notes)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.deletenotes(notes.id)}
                      className="deletebutton"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          )}
        </ul>
      </>
    );
  }
}

export default NotesListTable;
