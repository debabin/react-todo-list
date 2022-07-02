import React from 'react';

import styles from './Header.module.css';

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => (
  <div className={styles.header_container}>
    <h1 className={styles.header_title}>
      Todo list <b>{todoCount}</b> task(s)
    </h1>
  </div>
);
