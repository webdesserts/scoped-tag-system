import React from 'react';

import styles from './styles.css';

function H1(props) {
  return (
    <h1 className={ styles.heading } { ...props } />
  );
}

export default H1;
