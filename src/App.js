import React from 'react';
import './App.css';
import Movie from './components/Movie';
import {Jumbotron,Container} from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
     <Container className='justify-content-center'>
      <div className='row'>
          <div ClassName='col-12 py-5'>
            <span className='text-nowrap'>
            <img src='/GitHub-Mark-Light-120px-plus.png' />
              <h2 className='text-nowrap'>Github Readme Check</h2> 
            </span>
      </div>
      </div>
      <div className='row'>
        <div className='col-10 headingpadding'>
      <Movie />
      </div>
      </div>
    </Container> 
    </React.Fragment>
  );
}

export default App;