import React from 'react';
import './App.css';
import Movie from './components/Movie';
import {Jumbotron,Container} from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
     <Container className='justify-content-center'>
      <div className='row'>
          <div ClassName='col-12'>
          <Jumbotron>
              <h2 className='text-nowrap'>Movie Poster Search</h2> 
            </Jumbotron>
            <br/>
      </div>
      </div>
      <div className='row'>
        <div className='col-12 headingpadding'>
      <Movie />
      </div>
      </div>
    </Container> 
    </React.Fragment>
  );
}

export default App;