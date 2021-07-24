import React, { useEffect } from 'react';
import getRepositories from './services/get-repositories.service';

import './App.css';

function App(): JSX.Element {
  useEffect(() => {
    getRepositories()
      .then((result) => console.log('result', result))
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
