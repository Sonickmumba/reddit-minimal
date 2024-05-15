import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      <div>
        <span className={styles.reddit}>Reddit</span>
        Minimal
      </div>
    </div>
    <div className={styles.search}>
      <input type="text" placeholder="Search..." />
      <button type="button">Search</button>
    </div>
  </div>
);

export default Header;
