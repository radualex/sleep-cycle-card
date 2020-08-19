import React from "react";
import "./Card.css";

import { Button } from "./Button";

export class Card extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-info">
          <p className="title">Today</p>
          <p className="sub-title">Sleep stages</p>

          <div className="wrapper-sleep-cards">
          </div>
        </div>
        <div className="wrapper-button">
          <Button />
        </div>
      </div>
    );
  }
}
