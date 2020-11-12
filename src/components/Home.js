import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import { HomeBodyLoader, HeaderLoader } from "./Loaders";
import { cookies } from "../cc/code.js";

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
    fetch("http://localhost:8000/get-schedule", requestOptions)
      .then(response => response.json())
      .then(response => {
        this.setState({ scheduledetail: response, bodyLoaded: true });
      });
  }
  render() {
    var varHeader = <HeaderLoader />;
    var varBody = <HomeBodyLoader />;
    if (this.state.headLoaded) {
      varHeader = <Header data={this.state.userdetail} />;
    }
    if (this.state.bodyLoaded) {
      varBody = <Body data={this.state.scheduledetail} />;
    }
    return (
      <div>
        {varHeader}
        {varBody}
      </div>
    );
  }
}
