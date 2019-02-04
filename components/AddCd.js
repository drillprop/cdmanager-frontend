import React, { Component } from "react";
import Cd from "./Cd";

export default class AddCd extends Component {
  render() {
    return (
      <div>
        <h1>add an album</h1>
        <form>
          <input type="text" placeholder="search..." />
        </form>
        <h2>recently added</h2>
        <section>
          <Cd />
          <Cd />
          <Cd />
          <Cd />
          <Cd />
        </section>
      </div>
    );
  }
}
