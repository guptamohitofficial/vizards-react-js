import React from "react";
import { Link } from "react-router-dom";
import { cookies } from "../cc/code.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  handleSubmit = event => {
    event.preventDefault();
    const fdata = event.target;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: fdata.getElementsByClassName("lform")[0].value,
        password: fdata.getElementsByClassName("lform")[1].value
      })
    };

    const data = fetch("http://localhost:8000/request/token", requestOptions);

    data
      .then(response => response.json())
      .then(response => cookies.set("token", response["token"], { path: "/" }))
      .then(() => {
        super.setState({ token: cookies.get("token") });
        var isReqUrl = cookies.get("requestedUrl");
        if (isReqUrl) {
          cookies.remove("requestedUrl");
          window.location.href = isReqUrl;
        } else {
          window.location.href = "/";
        }
      });
  };
  render() {
    return (
      <div>
        <div className="col-lg-4 col-md-6 m-auto pt-5 mb-4">
          <div className="p-5 rounded">
            <form onSubmit={this.handleSubmit} className="p-5 bg-light">
              <h2 className="h4 text-black mb-5">Login</h2>

              <div className="form-group">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    required
                    className="lform form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="lform form-control"
                  />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12 text-center">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-md text-white"
                  />
                </div>
              </div>
            </form>

            <div className="row form-group">
              <div className="col-md-12 text-center">
                OR <br />
                New User can<Link to="/signup"> Signup</Link> here.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
