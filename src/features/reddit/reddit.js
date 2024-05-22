import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchPosts, selectFilteredPosts } from './redditSlice';
import shortenNumber from '../../app/shortenNumber';
import styles from './Reddit.module.css';
import message from './message.svg';

/* eslint-disable react/prop-types */
// import dummyPosts from './dummyPosts';

const Reddit = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectFilteredPosts);
  const selectedSubreddit = useSelector(
    (state) => state.reddit.selectedSubreddit,
  );

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit, dispatch]);

  return (
    <div className={styles.redditContainer}>
      {posts.map((post) => (
        <div className={styles.reddit} key={post.id}>
          {' '}
          <h2 className={styles.title}>{post.title}</h2>
          {post.url && (
            <img
              src={post.url}
              alt="Reddit post"
              className={styles.image}
            />
          )}
          <div className={styles.line} />
          <div className={styles.footer}>
            <div className={styles.userinfo}>
              <img src={post.userPic} alt="User" className={styles.userPic} />
              <p className={styles.postedBy}>
                <span className={styles.namePostby}>{post.author}</span>
                {' '}
                {moment.unix(post.created_utc).fromNow()}
                {' '}
                days ago
              </p>
            </div>
            <div className={styles.messages}>
              <img
                src={message}
                alt="Message icon"
                className={styles.messageIcon}
              />
              <span>{shortenNumber(post.num_comments, 1)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <div className={styles.redditContainer}>
    //   {postPosts.map((post) => (
    //     <div className={styles.reddit} key={post.id}>
    //       {' '}
    //       <h2 className={styles.title}>{post.title}</h2>
    //       {post.imageSrc && (
    //         <img
    //           src={post.imageSrc}
    //           alt="Reddit post"
    //           className={styles.image}
    //         />
    //       )}
    //       <div className={styles.line} />
    //       <div className={styles.footer}>
    //         <div className={styles.userinfo}>
    //           <img src={post.userPic} alt="User" className={styles.userPic} />
    //           <p className={styles.postedBy}>
    //             <span className={styles.namePostby}>{post.postedBy}</span>
    //             {' '}
    //             {post.daysPosted}
    //             {' '}
    //             days ago
    //           </p>
    //         </div>
    //         <div className={styles.messages}>
    //           <img
    //             src={message}
    //             alt="Message icon"
    //             className={styles.messageIcon}
    //           />
    //           <span>{post.numMessages}</span>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Reddit;
