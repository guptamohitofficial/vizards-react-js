import React from "react";
import { Switch, Route } from "react-router-dom";
import Create, { CreateACard } from "./Create";
import SideMenu from "../hoc/SideMenu";

export default class Body extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SideMenu(BodyHome)} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/create/card" component={CreateACard} />
      </Switch>
    );
  }
}

class BodyHome extends React.Component {
  render() {
    return (
      <div className="mb-4" style={{ margin: "0 auto" }}>
        <img
          src="/static/images/cards_1.svg"
          alt="Card svg example"
          className="col-md-10"
        />
      </div>
    );
  }
}
