import React from 'react';

function Search(props) {
  return (
    <form>
      <div className="mb-3 container">
        <label htmlFor="search" className="form-label">
          Search:
        </label>
        <input
          onChange={props.handleInputChange}
          search={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Video"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-primary mt-3"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
