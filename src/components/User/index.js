import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const INITIAL_USER = {
  username: "",
  stars: "",
  followers: "",
  email: "",
  repos: "",
  bio: "",
  avatar: ""
};

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_USER,
      isLoaded: false
    };
  }

  componentDidMount() {
    const propUsername = this.props.match.params.username;
    axios({
      method: "get",
      url: `https://api.github.com/users/${propUsername}`
    })
      .then(res => {
        this.setState({
          ...this.state,
          username: res.data.name,
          followers: res.data.followers,
          email: res.data.email,
          repos: res.data.public_repos,
          bio: res.data.bio,
          avatar: res.data.avatar_url,
          isLoaded: true
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    const {
      username,
      stars,
      followers,
      email,
      repos,
      bio,
      avatar,
      isLoaded
    } = this.state;
    return (
      <div className="mt-5">
        <div className="row justify-content-center mt3-">
          <Link to="/" className="btn btn-outline-success px-2 ml-2 w-1">
            Try again
          </Link>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-6">
            {isLoaded ? (
              <div
                className="card mb-3 shadow-sm  mb-5 bg-white rounded"
                style={{ maxWidth: "1020px" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <img src={avatar} className="card-img" alt="profile" />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">
                        <span className="mr-1">{username}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 8 8"
                        >
                          <path d="M4 0l-1 3h-3l2.5 2-1 3 2.5-2 2.5 2-1-3 2.5-2h-3l-1-3z" />
                        </svg>
                      </h5>
                      {bio ? (
                        <p className="card-text">{bio}</p>
                      ) : (
                        <p className="card-text">Nothing to say...Sorry</p>
                      )}
                      <hr />
                      <a href="#" className="card-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 8 8"
                        >
                          <path d="M5.5 0c-.51 0-.95.35-1.22.88.45.54.72 1.28.72 2.13 0 .29-.03.55-.09.81.19.11.38.19.59.19.83 0 1.5-.9 1.5-2s-.67-2-1.5-2zm-3 1c-.83 0-1.5.9-1.5 2s.67 2 1.5 2 1.5-.9 1.5-2-.67-2-1.5-2zm4.75 3.16c-.43.51-1.02.82-1.69.84.27.38.44.84.44 1.34v.66h2v-1.66c0-.52-.31-.97-.75-1.19zm-6.5 1c-.44.22-.75.67-.75 1.19v1.66h5v-1.66c0-.52-.31-.97-.75-1.19-.45.53-1.06.84-1.75.84s-1.3-.32-1.75-.84z" />
                        </svg>
                        <span className="ml-1">{followers} followers</span>
                      </a>
                      {email && (
                        <a href="mailto:user@mail.com" className="card-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 8 8"
                          >
                            <path
                              d="M0 0v1l4 2 4-2v-1h-8zm0 2v4h8v-4l-4 2-4-2z"
                              transform="translate(0 1)"
                            />
                          </svg>
                          <span className="ml-1">{email}</span>
                        </a>
                      )}
                      <a href="#" className="card-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 8 8"
                        >
                          <path d="M1.5 0c-.83 0-1.5.67-1.5 1.5 0 .66.41 1.2 1 1.41v2.19c-.59.2-1 .75-1 1.41 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.6-.34-1.1-.84-1.34.09-.09.21-.16.34-.16h2c.82 0 1.5-.68 1.5-1.5v-.59c.59-.2 1-.75 1-1.41 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .66.41 1.2 1 1.41v.59c0 .28-.22.5-.5.5h-2c-.17 0-.35.04-.5.09v-1.19c.59-.2 1-.75 1-1.41 0-.83-.67-1.5-1.5-1.5z" />
                        </svg>
                        <span className="ml-1">{repos} Repositories</span>
                      </a>
                    </div>
                  </div>
                </div>
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

export default User;
