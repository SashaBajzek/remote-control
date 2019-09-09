import React, { Component } from "react";
import "./Modal.scss";

/*
  Modal is rendered in layout.jsx
  The component that calls model can just simple send and object containing the content
  the content object can then be parsed out here
  */

export default class Modal extends Component {
  scrollDown = () => {
    const { container } = this.refs;
    container.scrollTop = container.scrollHeight;
  };

  displayContent = getContent => {
    const { contents } = this.props;
    return contents.map((content, key) => {
      return <div key={key}>{content[getContent]}</div>;
    });
  };

  render() {
    const { show, close } = this.props;
    return (
      <div className="Modal">
        <div
          className="Modal__wrapper"
          style={{
            opacity: show ? "1" : "0"
          }}
        >
          <div className="Modal__header">
            <h3>{this.displayContent("header")}</h3>
            <span className="Modal__button--close" onClick={close}>
              ×
            </span>
          </div>
          <div ref="container" className="Modal__body">
            {this.displayContent("body")}
          </div>
          <div className="Modal__footer">{this.displayContent("footer")}</div>
        </div>
      </div>
    );
  }
}
