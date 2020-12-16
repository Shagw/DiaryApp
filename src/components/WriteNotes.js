import React, { Component } from "react";

class WriteNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div className="notes">
        <h3>Add Notes to your Diary.</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <textarea
            name="note"
            required
            value={this.state.note}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default WriteNotes;
