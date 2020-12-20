import React, { Component } from "react";

class FilterNotes extends Component {
  constructor(props) {
    super(props);
  }

  multipleOptions = (array) => {
    return array.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
  };

  render() {
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
                {this.multipleOptions(this.props.sortingArray1)}
              </select>
            </div>
            <div className="filterdatewise">
              <label className="month">Month</label>
              <select
                name="month"
                id="month"
                value={this.props.month}
                onChange={this.props.handleChange}
              >
                {this.multipleOptions(this.props.montharray)}
              </select>
              <label className="year">Year</label>
              <select
                name="year"
                id="year"
                value={this.props.year}
                onChange={this.props.handleChange}
              >
                {this.multipleOptions(this.props.yeararray)}
              </select>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default FilterNotes;
