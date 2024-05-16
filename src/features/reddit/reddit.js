import React from 'react';
import styles from './Reddit.module.css';
/* eslint-disable react/prop-types */
import dummyPosts from './dummyPosts';

const Reddit = () => (
  <>
    {dummyPosts.map((dummy) => (
      <div className={styles.reddit} key={dummy.id}>
        {' '}
        <h2 className={styles.title}>{dummy.title}</h2>
        {dummy.imageSrc && (
          <img src={dummy.imageSrc} alt="Reddit post" className={styles.image} />
        )}
        <div className={styles.line} />
        <div className={styles.footer}>
          <div className={styles.userinfo}>
            <img
              src="/path/to/small-pic.png"
              alt="User"
              className={styles.userPic}
            />
            <p className={styles.postedBy}>
              Posted by
              {dummy.postedBy}
              {' '}
              {dummy.daysPosted}
              {' '}
              days ago
            </p>
          </div>
          <div className={styles.messages}>
            <i className="fa fa-envelope" />
            {' '}
            dummy.
            {dummy.numMessages}
          </div>
        </div>
      </div>
    ))}

    {/* <div className={styles.reddit}>
    {' '}
    <h2 className={styles.title}>{title}</h2>
    {imageSrc && <img src={imageSrc} alt="Reddit post" className={styles.image} />}
    <div className={styles.line} />
    <div className={styles.footer}>
      <div className={styles.userinfo}>
        <img src="/path/to/small-pic.png" alt="User" className={styles.userPic} />
        <p className={styles.postedBy}>
          Posted by
          {postedBy}
          {' '}
          {daysPosted}
          {' '}
          days ago
        </p>
      </div>
      <div className={styles.messages}>
        <i className="fa fa-envelope" />
        {' '}
        {numMessages}
      </div>
    </div>
  </div> */}
  </>
);

export default Reddit;
