import React from "react";
import "./InfoCard.css";

import { Circle } from "./Circle";

interface InfoCardProps {
  status: String;
  content: String;
  color: String;
}

export class InfoCard extends React.Component<InfoCardProps> {
  render() {
    return (
      <div className="wrapper-infoCard">
        <Circle color={this.props.color} />
        <div className="infoText">
          <p className="infoCard-title">{this.props.status}</p>
          <p className="infoCard-content">{this.props.content}</p>
        </div>
      </div>
    );
  }
}
