import React, { useState } from 'react';

const api = {
  APP_ID: "3be933320992b79fdbc47ce423ec78ed",
  BASE: "https://api.openweathermap.org/data/2.5/",
  UNITS: "metric"
}

const Form = ( {query, setQuery, temperatures, setTemperatures } ) => {

  //TODO: const inputTextHandler


  //preventDefault to prevent the page from refreshing
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
    fetchData();
  }

  const fetchData = async () => {
    return fetch(`${api.BASE}weather?q=${query}&units=${api.UNITS}&appid=${api.APP_ID}`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          setTemperatures(data);
      });
  }

  return (
    <form>
      <div className="search-section">
        <h2>Search for your city</h2>
        <input
          type="text"
          className="searchBar"
          onChange={
            (e) => {
              setQuery(e.target.value);
            }
          }
          value={query}
        />
      <button onClick={handleSearch} type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
