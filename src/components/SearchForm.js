import React from 'react';
import PropTypes from "prop-types";
import { motion } from "framer-motion"



function SearchForm(props){
  return(
    <React.Fragment>
      <form onSubmit={handleSearchingForMovies} >
        <input required type='text' name='searchparameter'></input>
        <motion.button whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} type='submit'>Search</motion.button>    
      </form>
    </React.Fragment>
  )

  function handleSearchingForMovies(event) {
    event.preventDefault();
    props.onSubmit(event.target.searchparameter.value)
  }
}

SearchForm.propTypes = {
  handleSettingSearchParam: PropTypes.func,
}

export default SearchForm;