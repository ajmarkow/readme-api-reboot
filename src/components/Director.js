import React from "react";
/* import { connect } from 'react-redux';
import { makeApiCall } from './actions'; */

class Director extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      directors: [],
    };
  }

  render() {
    const { error, isLoaded, directors } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message} </ React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Director</h1>
          <ul>
            {directors.map((director, index) => (
              <li key={index}>
                <h3>{director.name}</h3>
                <p>Quote: "{director.summary}"</p>
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }

  makeApiCall = () => {
    fetch('http://localhost:3000/directors')
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse)
        this.setState({
          isLoaded: true,
          directors: jsonifiedResponse,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  };

  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch(makeApiCall());
    this.makeApiCall();
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
