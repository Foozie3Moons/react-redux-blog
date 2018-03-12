import React, { Component } from 'react';
import List from "./List";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  addArticle = title => {
    const newArr = this.state.articles
    newArr.push(title)
    this.setState({ articles: newArr })
  }

  render() {
    return (
      <div>

        <div className="form">
          <h2>Add a new article: </h2>
          <Form addArticle={this.addArticle}/>
        </div>

        <div className="list">
          <h2>Articles:</h2>
          <List articles={this.state.articles}/>
        </div>

      </div>
    );
  }
}

export default App;
