import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Reddit from './features/reddit/Reddit';
import Header from './features/header/Header';
import Subreddit from './features/subreddit/Subreddit';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Header />
      <div className="reddit-main">
        <Reddit />
        <Subreddit />
      </div>
    </div>
  );
}

export default App;
