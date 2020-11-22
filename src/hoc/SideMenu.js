import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function SideMenu(Wrapped) {
  return class extends Component {
    render() {
      return (
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 p-4 positiAon-static">
                <div className="section-title-2 border-bottom">Add New</div>

                <Link to="/create" className="btn d-flex feature-v1">
                  <span className="wrap-icon bg-success icon-add font-weight-bolder font-weight-bold"></span>
                  <div className="my-auto">
                    <h3>Create</h3>
                  </div>
                </Link>

                <Link to="#" className="btn d-flex feature-v1">
                  <span className="wrap-icon icon-download bg-warning"></span>
                  <div className="my-auto">
                    <h3>Accept</h3>
                  </div>
                </Link>

                <div className="line"></div>
                <div className="section-title-2 border-bottom">Manage</div>

                <Link to="#" className="btn d-flex feature-v1">
                  <span className="wrap-icon icon-layers bg-info"></span>
                  <div className="my-auto">
                    <h3>My&nbsp;Cards</h3>
                  </div>
                </Link>

                <Link to="#" className="btn d-flex feature-v1">
                  <span className="wrap-icon icon-people"></span>
                  <div className="my-auto">
                    <h3>Meetings</h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-9 p-4" id="state_detail_view">
                <Wrapped {...this.props} {...this.state} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
}
