import React from 'react';
import PropTypes from "prop-types";

function SearchForm(props){
  return(
    <React.Fragment>
      <form onSubmit={handleSearchingForMovies}>
        <input type='text' name='searchparameter'></input>
        <button type='submit'>Search</button>    
    </form>
    </React.Fragment>
  )

  function handleSearchingForMovies(event) {
    event.preventDefault();
    props.onSearchSubmit( event.target.searchparameter.value)
  }
}

SearchForm.propTypes = {
  handleSettingSearchParam: PropTypes.func,
}

export default SearchForm;