import React from 'react';
import PropTypes from "prop-types";
import { motion } from "framer-motion"
import {Button} from 'react-bootstrap';



function SearchForm(props){
  return(
    <React.Fragment>
      <div className='align-items-center'>
        <form onSubmit={handleSearchingForMovies}>
          <br></br>
          <input required type='text' name='searchparameter'></input><br></br>
          <motion.button className='btn btn-secondary' whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} type='submit'>Search</motion.button>    
        </form>
      </div>
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