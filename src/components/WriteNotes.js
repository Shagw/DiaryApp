import React, { Component } from "react";
import { connect } from "react-redux";
import { addnotes } from "../redux/actions/noteaction";

class WriteNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: "",
      title: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addnotes(this.state);
    this.setState({ note: "", title: "" });
  };

  handleNotesList = (e) => {
    e.preventDefault();
    this.props.history.push("noteslist");
  };

  render() {
    return (
      <div className="notes">
        <h3>Add Notes to your Diary.</h3>
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
          <button type="submit">Submit</button>
        </form>
        <div>
          <button onClick={this.handleNotesList}> Show All my Notes.</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notes: state.notes.data,
});

const mapDispatchToProps = (dispatch) => ({
  addnotes: (notes) => dispatch(addnotes(notes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WriteNotes);
