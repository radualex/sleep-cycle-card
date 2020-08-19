import React, { Component } from "react";
import { render } from "react-dom";
import { Card } from "./Card";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Card title={"Today"} subTitle={"Sleep Stages"} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
