import React from "react";

function SearchResult(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <iframe id="videoPlayer">
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </li>
        </iframe>
      ))}
    </ul>
  );
}

export default SearchResult;
