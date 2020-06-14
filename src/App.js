import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import { store } from './store';
import ButtonGroup from './containers/ButtonGroup/ButtonGroup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {store.getState().username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(store.getState().totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <ButtonGroup />
      </div>
    );
  }
}

export default App;
