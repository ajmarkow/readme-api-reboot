import React from 'react';
import PropTypes from "prop-types";
import { motion } from "framer-motion"



function SearchForm(props){
  return (
    <React.Fragment>
      <div className="align-items-left">
        <form onSubmit={handleSearchingForMovies}>
          <input
            required
            type="text"
            class="form-control-plaintext"
            placeholder="your github username"
            name="searchparameter"
          ></input>
          <br></br>
          <motion.button
            className="btn btn-light"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.25 }}
            type="submit"
          >
            Check
          </motion.button>
        </form>
      </div>
    </React.Fragment>
  );

  function handleSearchingForMovies(event) {
    event.preventDefault();
    props.onSubmit(event.target.searchparameter.value)
  }
}

SearchForm.propTypes = {
  handleSettingSearchParam: PropTypes.func,
}

export default SearchForm;