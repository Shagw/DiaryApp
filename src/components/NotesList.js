import React, { Component } from "react";
import { connect } from "react-redux";
import { deletenotes, editnotes } from "../redux/actions/noteaction";
import FilterNotes from "./FilterNotes";
import NotesListTable from "./NotesListTable";
import UpdatingNotes from "./UpdatingNotes";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      note: "",
      updating: false,
      title: "",
      sorting1: "Oldest",
      filter1: "Week",
      sortingArray1: ["Oldest", "Newest"],
      filterArray1: ["Week", "Month", "Year"],
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
    var allnotes = this.props.notes;
    if (this.state.sorting1 === "Newest") {
      const sortedAllNotes = allnotes.slice().sort((a, b) => b.date - a.date);
      allnotes = sortedAllNotes;
    }
    if (this.state.sorting1 === "Oldest") {
      const sortedAllNotes = allnotes.slice().sort((a, b) => a.date - b.date);
      allnotes = sortedAllNotes;
    }

    return (
      <div>
        <div>
          <button onClick={this.handlebackbutton}>Back</button>
        </div>
        <UpdatingNotes
          title={this.state.title}
          notes={this.state.note}
          updating={this.state.updating}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <FilterNotes
          allnotes={allnotes}
          sorting1={this.state.sorting1}
          filter1={this.state.filter1}
          handleChange={this.handleChange}
          sortingArray1={this.state.sortingArray1}
          filterArray1={this.state.filterArray1}
        />
        <NotesListTable
          allnotes={allnotes}
          handleeditbutton={this.handleeditbutton}
          deletenotes={this.props.deletenotes}
        />
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
