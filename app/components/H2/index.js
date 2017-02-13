import React from 'react';

import styles from './styles.css';

function H2(props) {
  return (
    <h2 className={ styles.heading } { ...props } />
  );
}

export default H2;
