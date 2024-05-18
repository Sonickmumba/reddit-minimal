import React from 'react';
import styles from './Subreddit.module.css';
import football from './football.svg';

const Subreddit = () => (
  <div className={styles.subredditList}>
    <h2 className={styles.title}>Subreddits</h2>
    <div className={styles.line} />
    <ul className={styles.list}>
      <li className={styles.subredditItem}>
        <span className="material-symbols-outlined">home</span>
        <a href="/home">Home</a>
      </li>
      <li className={styles.subredditItem}>
        <span className="material-symbols-outlined">sentiment_satisfied</span>
        <a href="/home">Funny</a>
      </li>
      <li className={styles.subredditItem}>
        <span className="material-symbols-outlined">hd</span>
        <a href="/home">Movies</a>
      </li>
      <li className={styles.subredditItem}>
        <span className="material-symbols-outlined">stadia_controller</span>
        <a href="/home">Gaming</a>
      </li>
      <li className={styles.subredditItem}>
        <img src={football} alt="football icon" className={styles.football} />
        <a href="/home">Football</a>
      </li>
      <li className={styles.subredditItem}>
        <span className="material-symbols-outlined">currency_pound</span>
        <a href="/home">Politics</a>
      </li>
      <li className={styles.subredditItem}>
        <span className="material-symbols-outlined">breaking_news</span>
        <a href="/home">News</a>
      </li>
    </ul>
  </div>
);

export default Subreddit;
