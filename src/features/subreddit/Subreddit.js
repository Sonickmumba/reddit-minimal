import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from './subRedditSlice';
import { setSelectedSubreddit } from '../reddit/redditSlice';
import styles from './Subreddit.module.css';
// import football from "./football.svg";

const Subreddit = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  // const selectedSubreddit = useSelector(selectSelectedSubreddit);

  const isLoading = useSelector((state) => state.subreddits.isLoading);
  const error = useSelector((state) => state.subreddits.error);

  const handleSubredditClick = (url) => (e) => {
    e.preventDefault();
    dispatch(setSelectedSubreddit(url));
  };

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className={styles.subredditList}>
      <h2 className={styles.title}>Subreddits</h2>
      <ul className={styles.list}>
        {subreddits.map((subreddit) => (
          <li className={styles.subredditItem} key={subreddit.id}>
            <img
              src={
                subreddit.icon_img
                || `https://api.adorable.io/avatars/256/${subreddit.display_name}.png`
              }
              alt="subreddit icon"
              className={styles.subredditIcons}
            />
            {/* <span className="material-symbols-outlined">home</span> */}
            <a
              href="/"
              onClick={handleSubredditClick(subreddit.url)}
            >
              {subreddit.display_name}
            </a>
          </li>
        ))}
        <li className={styles.subredditItem}>
          <span className="material-symbols-outlined">home</span>
          <a href="/home">Home</a>
        </li>
      </ul>
    </div>
  );
};

export default Subreddit;
