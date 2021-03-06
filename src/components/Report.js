import React from "react";
import SearchForm from "./SearchForm";
import { CSSTransitionGroup } from "react-transition-group";
const headers = { "x-api-key": process.env.README_API_KEY };

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      repositories: [],
      scores: [],
      searchparam: null,
      isSubmitted: false,
    };
  }

  render() {
    let { error, repositories, scores, searchparam } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message} </React.Fragment>;
    } else if (repositories === undefined) {
      console.log("else if");
      return (
        <React.Fragment>
          <h4>No rawData Found</h4>
          <button className="btn btn-primary" onClick={this.resetMe}>
            Back to the search
          </button>
        </React.Fragment>
      );
    } else {
      console.error("RENDERING RETURN");
      console.log(searchparam);
      console.log(this.state);
      /* API Returns N/A if No Poster. */
      return (
        <React.Fragment>
          <SearchForm onSubmit={this.handleSettingSearchParam} />
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={10000}
            transitionLeaveTimeout={300}
          >
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Count</th>
                  <th scope="col">Repository</th>
                  <th scope="col">Readme?</th>
                </tr>
              </thead>
              <tbody>
                {scores &&
                  scores.map((item, index) => (
                    <tr>
                      <th scope="row">{parseInt(index) + 1}</th>
                      <td>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={"https://github.com/".concat(item.repository)}
                        >
                          {item.repository}
                        </a>
                      </td>
                      <td>
                        <p>{item.readmePresent === true ? "☑️ Yes" : "❌ No"}</p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </CSSTransitionGroup>
        </React.Fragment>
      );
    }
  }

  makeOmdbApiCall = (parameter) => {
    fetch(
      "https://2scou7syj7.execute-api.us-west-2.amazonaws.com/prod/grades?username=" +
        this.state.param,
      headers
    )
      .then((response) => response.json())
      .then((jsonifiedResponse) => jsonifiedResponse.Search)
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse);
        this.setState({
          isLoaded: true,
          repositories: jsonifiedResponse.githubRepositories,
          scores: jsonifiedResponse.githubScores,
          isSubmitted: true,
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
    fetch(
      `https://2scou7syj7.execute-api.us-west-2.amazonaws.com/prod/grades?username=${param}`
    )
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse);
        let updatedScores = jsonifiedResponse.githubScores;
        this.setState({
          isLoaded: true,
          searchparam: param,
          repositories: jsonifiedResponse.githubRepositories,
          scores: updatedScores,
          isSubmitted: true,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  };

  makeDeleteApiCall = () => {
    // fetch('https://sheetdb.io/api/v1/58f61be4dda40/{'Budget'}/{'237000000'}')
  };

  resetMe = (state) => {
    this.setState({
      // prevState
      error: null,
      isLoaded: false,
      reports: {},
      searchparam: null,
      isSubmitted: false,
    });
  };

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
//     Report: state.Report,
//     isLoaded: state.isLoaded,
//     error: state.error,
//   };
// };

// export default connect(mapStateToProps)(Report);
export default Report;
