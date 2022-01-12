import React, { Component } from "react";
import { Input } from "reactstrap";

export default class ToDoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: "",
      completed: false,
    };
  }

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ tasks: [...this.state.tasks, this.state.task] });
  };

  handleCheck = (event) => {
    this.setState({ completed: !this.state.completed });
  };

  render() {
    return (
      <div className="mainDiv">
        <Input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleSubmit}>Add a Task</button>
        <ul>
          {this.state.tasks.map((task, index) => {
            return (
              <li key={index}>
                {task}
                <br />
                {this.state.completed ? (
                  <div>Complete</div>
                ) : (
                  <div>Need to Do</div>
                )}
                <br />
                <Input type="checkbox" onChange={this.handleCheck} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
