import { createContext, useCallback, useState } from 'react';

import challenges from '../../challenges.json';

interface IChallenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface IChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: IChallenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

export const ChallengeContext = createContext({} as IChallengesContextData);

interface IChallengesProviderProps {
  children: React.ReactNode;
}

export function ChallengesProvider({ children }: IChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  // Calculo de potência para níveis, pode ser potencia ou log por exemplo
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
  }, [level]);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }, [level]);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null)
  }, []);

  return (
    <ChallengeContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge
    }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}