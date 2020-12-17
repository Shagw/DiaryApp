import React, { Component } from "react";

class FilterNotes extends Component {
  render() {
    let recommendatonbyoptions = this.props.sortingArray1.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
    let timewiseoptions = this.props.filterArray1.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });

    return (
      <div className="main">
        <h3>Your Personal Diary Notes</h3>

        {this.props.allnotes.length === 0 ? (
          <div>You have not added any Notes to your Diary.</div>
        ) : (
          <div></div>
        )}

        {this.props.allnotes.length !== 0 && (
          <div className="filter">
            <div className="sorting">
              <label>Sort By :</label>
              <select
                name="sorting1"
                id="sorting1"
                value={this.props.sorting1}
                onChange={this.props.handleChange}
              >
                {recommendatonbyoptions}
              </select>
            </div>
            <div className="filterdatewise">
              <label>Filter By :</label>
              <select
                name="sorting2"
                id="sorting2"
                value={this.props.filter1}
                onChange={this.props.handleChange}
              >
                {timewiseoptions}
              </select>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default FilterNotes;
