import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import User from "./components/User";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Repos from "./components/Repos";
import RepoDetail from "./components/RepoDetail";
import logo from "./inc/images/github-finder.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row justify-content-around mt-5">
            <div className="col-sm-auto col-12">
              <img src={logo} alt="github-finder" />
            </div>
          </div>
        </div>
        <Route
          path="/"
          exact={true}
          render={() => (
            <Search onChange={this.onChange} value={this.state.search} />
          )}
        />

        <Route path="/user/:username" exact={true} component={User} />

        <Route path="/user/:username/repos" component={Repos} />

        <Route path="/repos/:username/:full_name" component={RepoDetail} />
      </Router>
    );
  }
}

export default App;
