import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import { HeaderLoader } from "./Loaders";
import { Route, Switch } from "react-router-dom";
import { cookies } from "../cc/code.js";
import UserProfile, { UserProfileEdit } from "./UserProfile";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLoaded: false,
      bodyLoaded: false,
      userdetail: "",
      scheduledetail: ""
    };
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${cookies.get("token")}`
      }
    };

    fetch("http://localhost:8000/get-user-details", requestOptions)
      .then(response => response.json())
      .then(response => {
        this.setState({ userdetail: response, headLoaded: true });
      });
  }
  render() {
    var varHeader = <HeaderLoader />;
    if (this.state.headLoaded) {
      varHeader = <Header data={this.state.userdetail} />;
    }
    return (
      <div>
        {varHeader}
        <Switch>
          <Route
            exact={true}
            path="/:id/detail"
            component={() => <UserProfile data={this.state.userdetail} />}
          />
          <Route
            exact={true}
            path="/:id/edit"
            component={() => <UserProfileEdit data={this.state.userdetail} />}
          />
          <Route path="/" component={Body} />
        </Switch>
      </div>
    );
  }
}
