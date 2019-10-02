import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Search = ({ onChange, value }) => (
  <div className="row justify-content-center mt-5">
    <div className="col-8">
      <form
        className="form-inline justify-content-center"
        action={`/user/${value}`}
        method="GET"
      >
        <input
          type="text"
          className="form-control w-50 ml-2"
          id="search-field"
          placeholder="Type GitHub username..."
          onChange={onChange}
        />

        <Link
          to={`/user/${value}`}
          className="btn btn-outline-success px-2 ml-2 w-1"
        >
          GO
        </Link>
      </form>
    </div>
  </div>
);

export default Search;
