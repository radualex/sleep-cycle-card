import React from "react";
import "./InfoCard.css";

import { Circle } from "./Circle";

export class InfoCard extends React.Component {
  render() {
    return (
      <div className="wrapper-infoCard">
        <Circle color="#F15D7E" />
        <div className="infoText">
          <p className="infoCard-title">Awake</p>
          <p className="infoCard-content">15%・1hr 35min</p>
        </div>
      </div>
    );
  }
}
