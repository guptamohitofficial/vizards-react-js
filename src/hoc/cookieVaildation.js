import React from "react";
import { cookies } from "../cc/code.js";
// Take in a component as argument WrappedComponent
const cookieValidation = WrappedComponent => {
  // And return another component
  class HOC extends React.Component {
    componentDidMount() {
      function fetchOptionsPost(content = "") {
        var data = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${cookies.get("token")}`
          }
        };
        if (content !== "") {
          data["body"] = JSON.stringify(content);
        }
        this.setState({ fetchOptionsPost: data });
      }
      fetchOptionsPost();
      console.log(this.state.fetchOptionsPost);
    }
    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }
  return HOC;
};
export default cookieValidation;
