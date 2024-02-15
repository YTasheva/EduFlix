import React, { useState } from 'react';
import SearchForm from './SearchForm';
import ResultList from './resultList';
import API from '../utils/API';
import Front from './Front';
import SearchBar from './SearchBar';

function SearchResultContainer() {
  const [searchData, setSearchData] = useState({
    search: '',
    results: [],
  });

  const searchVideos = (query) => {
    API.search(query)
      .then((res) => setSearchData({ ...searchData, results: res.data.data }))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  // When the form is submitted, search the Giphy API for `searchData.search`
  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchVideos(searchData.search);
  };

  return (
    <div>
      <SearchBar
        value={searchData.search}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
     //<ResultList results={searchData.results} />
    </div>
  );
}

export default SearchResultContainer;
 