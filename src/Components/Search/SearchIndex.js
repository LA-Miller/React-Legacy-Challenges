import React, { Component } from "react";
import { Input } from "reactstrap";

export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
      filteredArray: [],
    };
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  filterArray = () => {
    const filteredArray = this.state.things.filter(thing => thing.includes(this.state.searchTerm));
    this.setState({filteredArray});
  }

  render() {
    return (
      <div>
        <Input 
        placeholder="Search Here" 
        value={this.state.searchTerm}
        onChange={this.handleChange} />
        <button onClick={this.filterArray}>Search</button>
        <h3>Results:</h3>
        <ul>
          {this.state.filteredArray.map((thing, index) => {
            return <li key={index}>{thing}</li>
          })}
        </ul>
      </div>
    );
  }
}
