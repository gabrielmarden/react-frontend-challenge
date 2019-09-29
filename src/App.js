import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import User from "./components/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="col-4">
              <h1 className="display-4">
                GitHub <em className="text-success">finder</em>
              </h1>
            </div>
          </div>
        </div>
        <Search onChange={this.onChange} value={this.state.search} />

        <Route path="/user/:username" component={User} />
      </Router>
    );
  }
}

export default App;
