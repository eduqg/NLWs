import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';

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
  completeChallenge: () => void;
}

export const ChallengeContext = createContext({} as IChallengesContextData);

interface IChallengesProviderProps {
  children: React.ReactNode;

  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export function ChallengesProvider({
  children,
  ...rest
}: IChallengesProviderProps) {
  // Usar res.level, caso não exista: 1
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);


  useEffect(() => {
    Notification.requestPermission();
  }, []);

  // Vamos usar cookies pois o servidor node não tem acesso ao local storage, que é algo do navegador
  // Backend, frontend e camada intermediária do next (em node) terão acesso
  // De preferências do usuário, dados e etc.
  // Se for uma informação apenas na camada visual do browser, usar local storage
  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  // Calculo de potência para níveis, pode ser potencia ou log por exemplo
  const experienceToNextLevel = useMemo(() => {
    return Math.pow((level + 1) * 4, 2);
  }, [level])

  const levelUp = useCallback(() => {
    setLevel(level + 1);
  }, [level]);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    // new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio!', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }, [level]);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null)
  }, []);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    // let = let it change :D
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }, [activeChallenge, currentExperience, challengesCompleted, experienceToNextLevel]);

  return (
    <ChallengeContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      completeChallenge
    }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}