import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/components/LoginGithub.module.css';

const LoginGithub: React.FC = () => {
  const router = useRouter();

  const handleNavigateToHome = useCallback(() => {
    router.push(`/home`);
  }, []);
  
  return (
    <div className={styles.containerLoginGithub}>
      <img src="./logo-full-white.png" />

      <h1>Bem-vindo</h1>

      <div className={styles.github}>
        <img src="./github.png" />
          Faça login com seu Github para começar
        </div>

      <div className={styles.username}>
        <input type="text" name="name" id="name" placeholder="Digite seu username" />
        <button type="button" onClick={handleNavigateToHome}><img src="./arrow.png" alt="Arrow" /></button>
      </div>

    </div>
  );
}

export default LoginGithub;