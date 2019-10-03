import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Search = ({ onChange, value }) => (
  <div className="row justify-content-center">
    <div className="col-6">
      <form action={`/user/${value}`} method="GET">
        <div className="form-group row">
          <div className="col-md-10 col-12">
            <input
              type="text"
              className="form-control w-100"
              id="search-field"
              placeholder="Type GitHub username..."
              onChange={onChange}
            />
          </div>
          <div className="col-md-2 col-sm-12 mt-md-0 mt-2 ">
            <Link to={`/user/${value}`} className="btn btn-outline-success w-1">
              GO
            </Link>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Search;
