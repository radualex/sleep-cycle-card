import React from "react";
import "./Button.css";

import { Circle } from "./Circle";

export class Button extends React.Component {
  render() {
    return (
      <div className="button-wrapper">
        <div className="button">
          <span class="material-icons">open_in_full</span>
        </div>
      </div>
    );
  }
}
