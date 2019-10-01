import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReposList from "./ReposList";
class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      params_username: props.match.params.username,
      isLoaded: false,
      orderAsc: false
    };
  }

  componentDidMount() {
    const propUsername = this.props.match.params.username;
    axios({
      method: "get",
      url: `https://api.github.com/users/${propUsername}/repos`
    })
      .then(res => {
        console.log(res);
        let repos = [...res.data];
        this.setState({ ...this.state, isLoaded: true, repos });
      })
      .catch(e => console.log(e));
  }

  toogleOrder = () => {
    if (this.state.orderAsc) {
      this.sortDescending(this.state.repos);
    } else {
      this.sortAscending(this.state.repos);
    }
  };
  sortAscending = arr => {
    let listRepos = [...arr];
    listRepos.sort((a, b) => {
      if (a.stargazers_count > b.stargazers_count) return 1;
      if (a.stargazers_count < b.stargazers_count) return -1;
      return 0;
    });
    this.setState({ ...this.state, repos: listRepos, orderAsc: true });
  };

  sortDescending = arr => {
    let listRepos = [...arr];
    listRepos
      .sort((a, b) => {
        if (a.stargazers_count > b.stargazers_count) return 1;
        if (a.stargazers_count < b.stargazers_count) return -1;
        return 0;
      })
      .reverse();
    this.setState({ ...this.state, repos: listRepos, orderAsc: false });
  };

  render() {
    const { isLoaded, params_username, repos } = this.state;
    return (
      <div>
        <div className="mt-5">
          <div className="row justify-content-center mt3-">
            <Link
              to={`/user/${params_username}`}
              className="btn btn-outline-success px-2 ml-2 w-1"
            >
              {`${params_username} profile`}
            </Link>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-6">
            {isLoaded ? (
              <div>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 8 8"
                        >
                          <path d="M1.5 0c-.83 0-1.5.67-1.5 1.5 0 .66.41 1.2 1 1.41v2.19c-.59.2-1 .75-1 1.41 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.6-.34-1.1-.84-1.34.09-.09.21-.16.34-.16h2c.82 0 1.5-.68 1.5-1.5v-.59c.59-.2 1-.75 1-1.41 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .66.41 1.2 1 1.41v.59c0 .28-.22.5-.5.5h-2c-.17 0-.35.04-.5.09v-1.19c.59-.2 1-.75 1-1.41 0-.83-.67-1.5-1.5-1.5z" />
                        </svg>
                        <button className="btn btn-link font-weight-bold">
                          Repositories
                        </button>
                      </th>
                      <th scope="col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 8 8"
                        >
                          <path d="M4 0l-1 3h-3l2.5 2-1 3 2.5-2 2.5 2-1-3 2.5-2h-3l-1-3z" />
                        </svg>
                        <button
                          className="btn btn-link font-weight-bold"
                          onClick={() => this.toogleOrder()}
                        >
                          Stars
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <ReposList repos={repos} />
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center">
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Repos;
