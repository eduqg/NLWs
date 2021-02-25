import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e beba água</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Inicie um cicle para receber desafios a serem completados</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance um level completando desafios
            </p>

          </div>
        )}
    </div>
  );
}

export default ChallengeBox;