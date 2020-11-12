import React from "react";
//import axios from 'axios';

const PublicBody = () => {
  return (
    <div>
      <div className="site-section hero">
        <div className="container text-center">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="mb-5">
                <h1 className="hero-heading">
                  Boost Business with <strong>vizards</strong>
                </h1>
                <p>
                  <strong>vizards</strong> lets you share your business profile
                  to everyone within seconds.
                </p>
                <a href="/login" className="btn btn-primary">
                  <b>Get 's Started</b>
                </a>
              </div>
              <img
                src="static/images/untree.co_dashboard_mocklayout_laptop.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="site-section pt-0" id="features-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span className="subtitle-1">Features</span>
              <h2 className="section-title-1 font-weight-bold">The Features</h2>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div
              className="col-lg-6 mb-5 order-lg-2 mb-lg-0"
              data-aos="fade-right"
            >
              <img
                src="static/images/untree.co_dashboard_mocklayout.jpg"
                alt=""
                className="img-fluid img-shadow"
              />
            </div>
            <div className="col-lg-5 mr-auto">
              <div className="mb-4">
                <h2 className="section-title-2">Powerful Apps</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nisi
                  facere sequi excepturi pariatur quos itaque magni, impedit a
                  quas qui ?
                </p>
              </div>
              <div className="d-flex feature-v1">
                <span className="wrap-icon icon-users"></span>
                <div>
                  <h3>Strategic Partners</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="d-flex feature-v1">
                <span className="wrap-icon icon-layers"></span>
                <div>
                  <h3>Business in Mind</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-left">
              <img
                src="static/images/untree.co_dashboard_mocklayout.jpg"
                alt=""
                className="img-fluid img-shadow"
              />
            </div>
            <div className="col-lg-5 order-lg-1 ml-auto">
              <div className="mb-4">
                <h2 className="section-title-2">Innovative Technologies</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nisi
                  facere sequi excepturi pariatur quos itaque magni, impedit a
                  quas qui ?
                </p>
              </div>
              <div className="d-flex feature-v1">
                <span className="wrap-icon icon-cog"></span>
                <div>
                  <h3>Many Features</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="d-flex feature-v1">
                <span className="wrap-icon icon-bolt"></span>
                <div>
                  <h3>Easy to use</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublicBody;
