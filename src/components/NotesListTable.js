import React, { Component } from "react";

class NotesListTable extends Component {
  render() {
    var allnotes = this.props.allnotes;
    var sortedArraybymonth = allnotes.filter(
      (note) => note.date.getMonth() + 1 === this.props.month
    );
    var sortedArraybyyear = allnotes.filter(
      (note) => note.date.getFullYear() === this.props.year
    );
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
