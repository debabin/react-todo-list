import React from 'react';

import { Header, TodoPanel, TodoList } from './components';

import styles from './App.module.css';
import { TodoProvider } from './utils';

export const App = () => (
  <TodoProvider>
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header />
        <TodoPanel mode='add' />
        <TodoList />
      </div>
    </div>
  </TodoProvider>
);
