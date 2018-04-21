import React from "react";
import { Link, Route } from "react-router-dom";
import One from "./components/one.jsx";
import Two from "./components/two.jsx";
import Home from "./components/home.jsx";

export default class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/one">One</Link>
          <Link to="/two">Two</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/one" component={One} />
        <Route path="/two" component={Two} />
      </div>
    );
  }
}
