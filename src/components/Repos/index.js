import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      params_username: props.match.params.username,
      isLoaded: false
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
                      <th scope="col">Repositorie</th>
                      <th scope="col">Stars</th>
                    </tr>
                  </thead>
                  <tbody>
                    {repos.map(e => (
                      <tr key={e.id}>
                        <td>{e.full_name}</td>
                        <td>{e.stargazers_count}</td>
                      </tr>
                    ))}
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
