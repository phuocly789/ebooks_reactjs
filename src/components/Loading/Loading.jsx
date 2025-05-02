import React from 'react';
import styles from './styles.module.scss';

const LoadingSpinner = () => {
    const { spinnerContainer, spinner } = styles;
  return (
    <div className={spinnerContainer}>
      <div className={spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
