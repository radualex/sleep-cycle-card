import React from "react";
import "./Card.css";

import { Button } from "./Button";
import { InfoCard } from "./InfoCard";

interface CardProps {
  title: String;
  subTitle: String;
}

interface CardState {
  fullScreen: Boolean;
}

export class Card extends React.Component<CardProps, CardState> {
  readonly state = {
    fullScreen: false
  };

  _handleOnClick = () => {
    this.setState({ fullScreen: !this.state.fullScreen });
  };

  render() {
    const fullScreen = this.state.fullScreen;

    return (
      <div className={`wrapper ${fullScreen ? "full-screen" : ""}`}>
        <div className="wrapper-info">
          <p className="title">{this.props.title}</p>
          <p className="sub-title">{this.props.subTitle}</p>

          <div className="wrapper-sleep-cards">
            <InfoCard status="Awake" content="15%・1hr 35min" color="#F15D7E" />
            <InfoCard status="Rem" content="15%・1hr 35min" color="#5DA6F1" />
            <InfoCard
              status="Light sleep"
              content="15%・1hr 35min"
              color="#5D68F1"
            />
            <InfoCard
              status="Deep sleep"
              content="15%・1hr 35min"
              color="#9E5DF1"
            />
          </div>
        </div>
        <div className="wrapper-button">
          <Button
            onClick={this._handleOnClick}
            icon={!fullScreen ? "open_in_full" : "close_fullscreen"}
          />
        </div>
      </div>
    );
  }
}
