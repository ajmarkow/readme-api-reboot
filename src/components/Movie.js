import React from "react";
import SearchForm from "./SearchForm"
// import { connect } from 'react-redux';
// import { makeApiCall } from './actions';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { CSSTransitionGroup } from 'react-transition-group'


class Movie extends React.Component {
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
    let { error, movies, searchparam } = this.state;
    // const formatter=new Intl.NumberFormat('en-US',{style:'currency', currency: 'USD',minimumFractionDigits: 2})
    if (error) {
      return <React.Fragment>Error: {error.message} </ React.Fragment>;
    } else if (movies === undefined) {
      console.log("else if")
      return(
        <React.Fragment>
        <h4>No Movies Found</h4>
        <button className='btn btn-primary' onClick={this.resetMe}>Back to the search</button>
        </React.Fragment>
      )
    } 
    else {
      console.error('RENDERING RETURN')
      console.log(searchparam)
      console.log(this.state)
      /* API Returns N/A if No Poster. */

      return (
        <React.Fragment>
          <SearchForm onSubmit={this.handleSettingSearchParam} />
          <CSSTransitionGroup
          transitionName="example"
        transitionEnterTimeout={10000}
        transitionLeaveTimeout={300}>
          
          <ul className='headingpadding'>
            {movies !== undefined && movies.map((movie, index) => (
              <li className='bottompad' key={index}>
                <h3>Title: {movie.Title}</h3>
                {movie.Poster === "N/A" && 
        <h5>
          No Poster Returned
        </h5>
    }
                {movie.Poster !== "N/A" && <img alt='selected movie poster' src={movie.Poster}></img>
               }
              </li>
            ))}
          </ul>
        </ CSSTransitionGroup>
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

   resetMe = (state) => {
    this.setState({
      // prevState
      error: null,
      isLoaded: false,
      movies: [],
      searchparam: null,
      isSubmitted:false
    })
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

  // componentDidMount() {
  //   // const { dispatch } = this.props;
  //   // dispatch(makeApiCall());
  //     console.log(this.state.searchparam)
  //   // if ( this.state.searchparam != useCallback()) {
  //   this.makeOmdbApiCall(this.state.searchparam)
  //   // }

  // }

  
}



// const mapStateToProps = (state) => {
//   return {
//     Movie: state.Movie,
//     isLoaded: state.isLoaded,
//     error: state.error,
//   };
// };

// export default connect(mapStateToProps)(Movie);
export default Movie;
