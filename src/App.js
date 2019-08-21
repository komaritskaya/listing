import React from 'react';
import Listing from './components/Listing';
import data from './data.json';
import './App.css';

const items = JSON.parse(JSON.stringify(data));

function App() {
  console.log(items);
  return (
    <div className="App">
      <Listing items={items} />
    </div>
  );
}

export default App;
