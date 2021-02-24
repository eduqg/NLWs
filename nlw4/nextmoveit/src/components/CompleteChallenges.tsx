import React from 'react';

import styles from '../styles/components/CompleteChallenges.module.css';

const CompleteChallenges: React.FC = () => {
  return (
    <div className={styles.completeChallengesContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  );
}

export default CompleteChallenges;