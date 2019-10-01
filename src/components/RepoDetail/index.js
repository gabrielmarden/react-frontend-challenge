import React, { Component } from "react";
import axios from "axios";

class RepoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params_repo: props.match.params.full_name,
      name: "",
      description: "",
      stars: "",
      language: "",
      link: ""
    };
  }

  componentDidMout() {
    axios({
      method: "get",
      url: `https://api.github.com/repos/${this.state.params_repo}`
    })
      .then(res => {
        console.log(res);
        let repo = [...res.data];
        this.setState({
          ...this.state,
          name: repo.name,
          description: repo.description,
          stars: repo.stargazers_count,
          language: repo.language
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    const { name, description, stars, language, link } = this.state;
    return (
      <div className="row justify-content-center mt-3">
        <div className="col-6">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">{name}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Stars: {stars}</li>
              <li className="list-group-item">Description:{description}</li>
              <li className="list-group-item">Language:{language}</li>
              <li className="list-group-item">
                <a href={link} className="btn btn-link">
                  {link}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RepoDetail;
