import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Header from './features/header/Header';
import Reddit from './features/reddit/Reddit';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Header />
      <Reddit />
    </div>
  );
}

export default App;
