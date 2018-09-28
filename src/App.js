import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import router from "./components/router";
import toggleDone from "./components/toggleDone";
import populateList from "./components/populateList";
import addItems from "./components/addItems";
import events from "./components/events";

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <h2>To-Do</h2>
        <p />
        <ul class="plates">
          <li>Loading ....</li>
        </ul>
        {/* <form class="add-items">
          <input class="add.-items">
            <input type="text" names="item" placeholder="Item Name" required>
            <input type ="submit" value="+ Add Item">
        </form> */}
      </div>
    );
  }
}

export default App;
