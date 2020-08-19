import React from "react";
import "./Button.css";

import { Circle } from "./Circle";

interface ButtonProps {
  onClick?: Function;
  icon: String;
}

export class Button extends React.Component<ButtonProps> {
  _handleOnClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <div className="button-wrapper" onClick={this._handleOnClick}>
        <div className="button">
          <span class="material-icons">{this.props.icon}</span>
        </div>
      </div>
    );
  }
}
