import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default class Body extends React.Component {
  render() {
    const data = this.props.data;
    const listCards = data.map(aCard => <Card data={aCard} />);
    return (
      <div>
        <div className="container py-4">
          <div className="p-5"></div>
          <div className="row">
            <div className="col-md-3 col-6 mb-4">
              <Link
                to="/savenew"
                style={{ borderColor: "#fd7e14" }}
                className="shadow btn"
              >
                <b>Add new</b>
              </Link>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <Link
                to="/create"
                style={{ borderColor: "#fd7e14" }}
                className="shadow btn"
              >
                <b>Create</b>
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3 p-4 position-static">
              <div className="d-flex feature-v1 cpointer">
                <span className="wrap-icon icon-layers"></span>
                <div className="my-auto">
                  <h3>Scheduled</h3>
                </div>
              </div>

              <div className="d-flex feature-v1 cpointer">
                <span className="wrap-icon icon-layers"></span>
                <div className="my-auto">
                  <h3>Shared to</h3>
                </div>
              </div>

              <div className="d-flex feature-v1 cpointer">
                <span className="wrap-icon icon-layers"></span>
                <div className="my-auto">
                  <h3>Holder</h3>
                </div>
              </div>

              <div className="d-flex feature-v1 cpointer">
                <span className="wrap-icon icon-layers"></span>
                <div className="my-auto">
                  <h3>History</h3>
                </div>
              </div>
            </div>

            <div className="col-md-9 p-4" id="state_detail_view">
              {this.props.data !== "" ? (
                <div>{listCards}</div>
              ) : (
                <div className="mb-4" style={{ margin: "0 auto" }}>
                  <img
                    src="/static/images/cards_1.svg"
                    alt="Card svg example"
                    className="col-md-10"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
