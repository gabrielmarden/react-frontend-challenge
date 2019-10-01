import React from "react";
import { Link } from "react-router-dom";

const ReposList = ({ repos }) =>
  repos.map(e => (
    <tr key={e.id}>
      <td>{<Link to={`repos/${e.full_name}`}>{e.full_name}</Link>}</td>
      <td>{e.stargazers_count}</td>
    </tr>
  ));

export default ReposList;
