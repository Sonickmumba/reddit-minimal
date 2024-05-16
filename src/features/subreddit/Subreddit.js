import React from 'react';
import styles from './Subreddit.module.css';

const Subreddit = () => (
  <div className={styles.subredditList}>
    <h2 className={styles.title}>Subreddits</h2>
    <ul className={styles.list}>
      <li className={styles.subredditItem}>
        <a href="/home">Home</a>
      </li>
      <li className={styles.subredditItem}>
        <a href="/home">Funny</a>
      </li>
      <li className={styles.subredditItem}>
        <a href="/home">Movies</a>
      </li>
      <li className={styles.subredditItem}>
        <a href="/home">Gaming</a>
      </li>
      <li className={styles.subredditItem}>
        <a href="/home">Football</a>
      </li>
      <li className={styles.subredditItem}>
        <a href="/home">Politics</a>
      </li>
      <li className={styles.subredditItem}>
        <a href="/home">News</a>
      </li>
    </ul>
  </div>
);

export default Subreddit;
