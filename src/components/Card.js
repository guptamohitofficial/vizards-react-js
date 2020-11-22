import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    const d = this.props.data;
    return (
      <div className="card mb-4 border-top border-success">
        <div className="card-body">
          <h5 className="card-title">With, {d.to}</h5>
          <h6>
            {d.ctype} : {d.timeMeeting}
          </h6>
          <p className="card-text">{d.detail}</p>
        </div>
        <div className="card-footer">
          <small className="text-capitalize float-left text-black">
            <ul className="p-0 m-0 list-unstyled">
              <li>
                Contact : {d.phone} ({d.ofPhone})
              </li>
              <li>Address : {d.address}</li>
            </ul>
          </small>
          <div className="col-3 float-right">
            <Link
              to={`/card/${d.id}/detail`}
              className="btn btn-info py-2 px-4"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
