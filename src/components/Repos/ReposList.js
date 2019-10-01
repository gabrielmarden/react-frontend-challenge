import React from "react";

const ReposList = ({ repos }) =>
  repos.map(e => (
    <tr key={e.id}>
      <td>{e.full_name}</td>
      <td>{e.stargazers_count}</td>
    </tr>
  ));

export default ReposList;
