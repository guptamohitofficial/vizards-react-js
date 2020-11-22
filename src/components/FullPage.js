import React, { Component } from "react";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import PublicBody from "./PublicBody";
import { cookies } from "../cc/code.js";
import CheckToken from "./CheckToken";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Blog from "./Blog";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
//import NotFound from "./Error";

export default class FullPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false, data: false };
  }

  render() {
    var showComponent;

    if (this.state.isLogin) {
      showComponent = <Home />;
    } else if (cookies.get("token") && !this.state.isLogin) {
      showComponent = <CheckToken />;

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: cookies.get("token")
        })
      };

      fetch("http://localhost:8000/validate/token", requestOptions)
        .then(response => response.json())
        .then(response => {
          if (response["detail"]) {
            this.setState({ isLogin: true });
          } else {
            cookies.remove("token");
            window.alert("Invalid Attempt Please Relogin");
          }
        });
    } else {
      showComponent = false;
    }

    if (
      window.location.href !== "http://localhost:3000" &&
      window.location.href !== "http://localhost:3000/" &&
      window.location.href !== "http://localhost:3000/login" &&
      window.location.href !== "http://localhost:3000/signup" &&
      window.location.href !== "http://localhost:3000/about" &&
      window.location.href !== "http://localhost:3000/contact" &&
      window.location.href !== "http://localhost:3000/blog" &&
      !cookies.get("token")
    ) {
      cookies.set("requestedUrl", window.location.href, { path: "/" });
      window.location.href = "/login";
    }

    return (
      <div>
        {showComponent !== false ? (
          <div>{showComponent}</div>
        ) : (
          <div>
            <PublicHeader />
            <Route exact={true} path="/" component={PublicBody} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/signup" component={Signup} />
          </div>
        )}
        <Switch>
          <Route exact={true} path="/contact" component={Contact} />
          <Route exact={true} path="/blog" component={Blog} />
        </Switch>
        <PublicFooter />
      </div>
    );
  }
}

//<Route component={NotFound} />
