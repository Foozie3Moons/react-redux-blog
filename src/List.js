import React from "react";

const List = props => (
  <ul>
    {props.articles.map((article, index) => (
      <li key={index}>{article}</li>
    ))}
  </ul>
);


export default List;
