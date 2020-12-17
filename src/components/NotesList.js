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
      month: 12,
      year: 2020,
      sortingArray1: ["Oldest", "Newest"],
      montharray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yeararray: [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
      ],
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
    let sortedArray;
    if (this.state.sorting1 === "Newest") {
      sortedArray = allnotes.slice().sort((a, b) => b.date - a.date);
      allnotes = sortedArray;
    }
    if (this.state.sorting1 === "Oldest") {
      sortedArray = allnotes.slice().sort((a, b) => a.date - b.date);
      allnotes = sortedArray;
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
          allnotes={this.props.notes}
          sorting1={this.state.sorting1}
          month={this.state.month}
          handleChange={this.handleChange}
          sortingArray1={this.state.sortingArray1}
          year={this.state.year}
          yeararray={this.state.yeararray}
          montharray={this.state.montharray}
        />
        <NotesListTable
          allnotes={allnotes}
          handleeditbutton={this.handleeditbutton}
          deletenotes={this.props.deletenotes}
          year={this.state.year}
          month={this.state.month}
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
