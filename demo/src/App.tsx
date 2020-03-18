import React from 'react';
import './App.css';

import CoordinatesInput, {TestProps} from 'coordinates-input/dist';

function App() {
  return (
    <div className="App">
      <CoordinatesInput text="CHECK" />
    </div>
  );
}

export default App;
