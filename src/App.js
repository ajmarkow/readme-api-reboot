import React from 'react';
import './App.css';
import Movie from './components/Movie';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
     <Container className='align-items-left'>
      <div className='row py-4 px-3'>
          <div ClassName='col-12 align-items-left'>
            <span>
              <h2 className='text-nowrap'>Github Readme Check</h2>
              <p>Check if any of your public Github Repositories don't have a README.</p>

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