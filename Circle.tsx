import React from "react";
import "./Circle.css";

interface CircleProps {
  color: String;
}

export class Circle extends React.Component<CircleProps> {
  render() {
    return (
      <div
        className="circle-wrapper"
        style={{ background: this.props.color }}
      />
    );
  }
}
