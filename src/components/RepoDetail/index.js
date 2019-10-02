import React, { Component } from "react";
import axios from "axios";

class RepoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params_username: props.match.params.username,
      params_repo: props.match.params.full_name,
      name: "",
      description: "",
      stars: "",
      language: "",
      link: ""
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: `https://api.github.com/repos/${this.state.params_username}/${this.state.params_repo}`
    })
      .then(res => {
        console.log("Repos", res);
        let repo = { ...res.data };
        this.setState({
          ...this.state,
          name: repo.name,
          description: repo.description,
          stars: repo.stargazers_count,
          language: repo.language,
          link: repo.html_url
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    const { name, description, stars, language, link } = this.state;
    return (
      <div className="row justify-content-center mt-4">
        <div className="col-4 p-4">
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-header font-weight-bold text-center">
              {name}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Stars: {stars}</li>
              <li className="list-group-item">Description: {description}</li>
              <li className="list-group-item">Language: {language}</li>

              <a
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-link list-group-item text-left"
              >
                {link}
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RepoDetail;
