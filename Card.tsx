import React from "react";
import "./Card.css";

import { Button } from "./Button";
import { InfoCard } from "./InfoCard";

interface CardProps {
  title: String;
  subTitle: String;
}

export class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-info">
          <p className="title">{this.props.title}</p>
          <p className="sub-title">{this.props.subTitle}</p>

          <div className="wrapper-sleep-cards">
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
        <div className="wrapper-button">
          <Button />
        </div>
      </div>
    );
  }
}
