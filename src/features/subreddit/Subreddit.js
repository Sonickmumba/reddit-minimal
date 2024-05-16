import React from 'react';

const Subreddit = () => (
  <div className="subreddit-list">
    <h2 className="title">Subreddits</h2>
    <ul className="list">
      <li className="subreddit-item"><a href="/home">Home</a></li>
      <li className="subreddit-item"><a href="/funny">Funny</a></li>
      <li className="subreddit-item"><a href="/Movies">Movies</a></li>
      <li className="subreddit-item"><a href="/Movies">Gaming</a></li>
      <li className="subreddit-item"><a href="/football">Football</a></li>
      <li className="subreddit-item"><a href="politics">Politics</a></li>
      <li className="subreddit-item"><a href="News">News</a></li>
    </ul>
  </div>
);

export default Subreddit;
