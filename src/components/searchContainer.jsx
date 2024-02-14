import React, { useState } from 'react';
import SearchForm from './SearchForm';
import ResultList from './resultList';
import API from '../utils/API';

function SearchResultContainer() {
  const [searchData, setSearchData] = useState({
    search: '',
    results: [],
  });

  const searchGiphy = (query) => {
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
    searchGiphy(searchData.search);
  };

  return (
    <div>
      <SearchForm
        search={searchData.search}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      <ResultList results={searchData.results} />
    </div>
  );
}

export default SearchResultContainer;
