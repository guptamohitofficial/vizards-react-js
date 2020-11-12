import React from "react";
import { Link } from "react-router-dom";

const PublicHeader = () => {
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className="site-navbar js-sticky-header site-navbar-target fixed-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <div className="mb-0 site-logo">
                <a href="/" style={{ fontSize: "1.3em" }} className="mb-0">
                  vizards<span className="text-primary">.</span>
                </a>
              </div>
            </div>

            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <Link to="/" className="nav-link">
                      <b>Home</b>
                    </Link>
                  </li>

                  <li>
                    <Link to="/login" className="nav-link">
                      <b>Login</b>
                    </Link>
                  </li>

                  <li>
                    <Link to="/signup" className="nav-link">
                      <b>Signup</b>
                    </Link>
                  </li>

                  <li>
                    <Link to="/blog" className="nav-link">
                      <b>Blog</b>
                    </Link>
                  </li>

                  <li>
                    <Link exact="true" to="/contact" className="nav-link">
                      <b>Contact</b>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="col-6 d-inline-block d-xl-none ml-md-0 py-3"
              style={{ position: "relative", top: "3px" }}
            >
              <Link
                href="/"
                className="site-menu-toggle js-menu-toggle float-right"
              >
                <span className="icon-menu h3 text-black"></span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PublicHeader;
