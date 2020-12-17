import React, { Component } from "react";
import { connect } from "react-redux";
import { deletenotes, editnotes } from "../redux/actions/noteaction";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      note: "",
      updating: false,
      title: "",
    };
  }

  handlebackbutton = (e) => {
    e.preventDefault();
    this.props.history.push("/");
  };

  handleeditbutton = (notes) => (e) => {
    e.preventDefault();
    this.setState({
      updating: true,
      note: notes.note,
      id: notes.id,
      title: notes.title,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editnotes({
      id: this.state.id,
      note: this.state.note,
      title: this.state.title,
    });
    this.setState({ note: "", updating: false, id: "", title: "" });
  };

  render() {
    return (
      <div>
        {this.state.updating && (
          <div className="notes">
            <form className="form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                required
                name="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <textarea
                name="note"
                required
                placeholder="Write your notes here"
                value={this.state.note}
                onChange={this.handleChange}
              ></textarea>
              <button type="submit">Update</button>
            </form>
          </div>
        )}

        <div>
          <button onClick={this.handlebackbutton}>Back</button>
        </div>

        <ul className="allnotes">
          <h3>Your Personal Diary Notes</h3>

          {this.props.notes.length === 0 ? (
            <div>You have not added any Notes to your Diary.</div>
          ) : (
            <div></div>
          )}

          {this.props.notes.length !== 0 && (
            <table className="table" style={{ width: "100%" }}>
              <tr>
                <th>Created On</th>
                <th>Title</th>
                <th>Notes</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>

              {this.props.notes.map((notes, index) => (
                <tr key={index}>
                  <td>{notes.date}</td>
                  <td>{notes.note}</td>
                  <td>{notes.title}</td>
                  <td>
                    <button
                      className="editButton"
                      onClick={this.handleeditbutton(notes)}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notes: state.notes.data,
});

const mapDispatchToProps = (dispatch) => ({
  deletenotes: (id) => dispatch(deletenotes(id)),
  editnotes: (notes) => dispatch(editnotes(notes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
