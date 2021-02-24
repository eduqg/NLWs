import React from 'react';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/eduqg.png" alt="Avatar Eduardo" />

      <div>
        <strong>Eduardo Quintino</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;