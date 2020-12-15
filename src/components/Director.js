import React, {useState, useEffect} from "react";
import SearchForm from "./SearchForm"
/* import { connect } from 'react-redux';
import { makeApiCall } from './actions'; */

class Director extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      searchparam: null,
      isSubmitted:false
    };
  }

  render() {
    let { error, isLoaded, movies, searchparam } = this.state;
    // const formatter=new Intl.NumberFormat('en-US',{style:'currency', currency: 'USD',minimumFractionDigits: 2})
    if (error) {
      return <React.Fragment>Error: {error.message} </ React.Fragment>;
    } else if (searchparam == null && this.state.isSubmitted === false) {
      console.log("else if")
      if (searchparam !=null ){
      return(
        <SearchForm />
      )
      }
    } else {
      console.error('RENDERING RETURN')
      console.log(searchparam)
      console.log(this.state)
      return (
        <React.Fragment>
          <SearchForm onSubmit={this.handleSettingSearchParam} />
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <h3>Title: {movie.Title}</h3>
                <img alt='selected movie poster' src={movie.Poster}></img>
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }

  makeOmdbApiCall = (parameter) => {
    fetch(`https://www.omdbapi.com/?apikey=5e4cd2be&s=${parameter}`)
      .then((response) => response.json())
      .then((jsonifiedResponse) => (jsonifiedResponse.Search))
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse)
        this.setState({
          isLoaded: true,
          movies: jsonifiedResponse,
          isSubmitted: true
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  };

  handleSettingSearchParam = (param) => {
    console.log('handler' + param)
    fetch(`https://www.omdbapi.com/?apikey=5e4cd2be&s=${param}`)
    .then((response) => response.json())
    .then((jsonifiedResponse) => (jsonifiedResponse.Search))
    .then((jsonifiedResponse) => {
      console.log(jsonifiedResponse)
      this.setState({
        isLoaded: true,
        movies: jsonifiedResponse,
        isSubmitted: true
      });
    })
    .catch((error) => {
      this.setState({
        isLoaded: true,
        error,
      });
    });
  }

  makeDeleteApiCall = () => {
    // fetch('https://sheetdb.io/api/v1/58f61be4dda40/{'Budget'}/{'237000000'}')
  }

  // makeDeleteApiCall = () => {
  //   fetch(`http://localhost:3000/directors/${this.id}`,{method: 'DELETE'})
  //   .then((response) => response.json())
  //   .then((jsonifiedResponse) => {
  //     console.log(jsonifiedResponse)
  //     if (jsonifiedResponse.code === 200){
  //       const newresponse = {...jsonifiedResponse.filter(this.state.directors.id !== this.id)}
  //     this.setState({
  //       isLoaded: true,
  //       directors: newresponse,
  //     });
  //     console.log('DELETED')
  //   }
  //   })
  //   .catch((error) => {
  //     this.setState({
  //       isLoaded: true,
  //       error,
  //     });
  //   });
  // }

  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch(makeApiCall());
      console.log(this.state.searchparam)
    if (searchparam != nuseCallback)
    this.makeOmdbApiCall(this.state.searchparam)
  

  }

  
}



// const mapStateToProps = (state) => {
//   return {
//     Director: state.Director,
//     isLoaded: state.isLoaded,
//     error: state.error,
//   };
// };

// export default connect(mapStateToProps)(Director);
export default Director;
