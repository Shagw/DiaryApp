import React, { Component } from "react";

class NotesListTable extends Component {
  render() {
    return (
      <>
        <ul className="allnotes">
          {this.props.allnotes.length !== 0 && (
            <table className="table" style={{ width: "100%" }}>
              <tr>
                <th>Created On</th>
                <th>Title</th>
                <th>Notes</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>

              {this.props.allnotes.map((notes, index) => (
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
