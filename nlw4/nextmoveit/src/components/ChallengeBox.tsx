import { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
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