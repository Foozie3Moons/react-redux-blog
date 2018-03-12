import React, { Component } from "react";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addArticle(this.state.title);
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={this.handleChange}
        />
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

export default Form;
