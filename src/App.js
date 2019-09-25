import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-4">
            <h1 className="display-4">
              GitHub <em className="text-success">finder</em>
            </h1>
          </div>
        </div>

        <Search />
      </div>
    );
  }
}

export default App;
