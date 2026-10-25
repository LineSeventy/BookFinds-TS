import React, { Component } from "react";

export class CardLayout extends Component {
  render() {
    return (
      <article className="card">
        <img src="#" alt="Image" />
        <header className="title"></header>
        <div className="content">
          <p className="description"></p>
        </div>
      </article>
    );
  }
}

export default CardLayout;
