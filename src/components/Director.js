import React from "react";
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
      searchparam: null
    };
  }

  render() {
    const { error, isLoaded, movies } = this.state;
    // const formatter=new Intl.NumberFormat('en-US',{style:'currency', currency: 'USD',minimumFractionDigits: 2})
    if (error) {
      return <React.Fragment>Error: {error.message} </ React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <SearchForm onSearchSubmit={this.handleSettingSearchParam} />
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <h3>Title: {movie.Title}</h3>
                <img alt='selected movie poster' src={movie.Poster}></img>
                <button onClick={this.makeDeleteApiCall()}>DELETE ME</button>
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
    const clone = {...this.state}
    const modifiedclone = clone => clone.searchparam = param
    this.setState(modifiedclone)
    console.log(this.state)
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
    this.makeOmdbApiCall();
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
