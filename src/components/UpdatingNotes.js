import React, { Component } from "react";

class UpdatingNotes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.updating && (
          <div className="notes">
            <form className="form" onSubmit={this.props.handleSubmit}>
              <input
                type="text"
                required
                name="title"
                placeholder="Title"
                value={this.props.title}
                onChange={this.props.handleChange}
              />
              <textarea
                name="note"
                required
                placeholder="Write your notes here"
                value={this.props.notes}
                onChange={this.props.handleChange}
              ></textarea>
              <button type="submit">Update</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default UpdatingNotes;
