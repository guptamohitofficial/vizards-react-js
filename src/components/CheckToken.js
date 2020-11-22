import React, { Component } from "react";
//import { cookies } from "../cc/code.js";

export default class CheckToken extends Component {
  /*componentDidMount() {
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
          console.log();
        } else {
          window.alert("please clear all cookies, and relogin");
        }
      });
  }*/

  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div style={{ marginTop: "15%" }} className="">
            <div className="mb-2 site-logo">
              <div style={{ fontSize: "4em" }} className="mb-0 text-black">
                vizards<span className="text-primary">.</span>
              </div>
            </div>
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
