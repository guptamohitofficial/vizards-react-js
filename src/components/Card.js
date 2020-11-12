import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const d = this.props.data;
    return (
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">With, {d.to}</h5>
          <h6>
            {d.ctype} : {d.timeMeeting}
          </h6>
          <p className="card-text">{d.detail}</p>
        </div>
        <div className="card-footer">
          <small className="text-capitalize text-black">
            Contact : {d.phone} ({d.ofPhone})
          </small>
        </div>
      </div>
    );
  }
}
