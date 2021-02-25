import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ChallengeContext } from './ChallengesContext';

interface ICountdownContextData {
  minutes: number,
  seconds: number,
  hasFinished: boolean,
  isActive: boolean,
  startCountdown: () => void,
  resetCountdown: () => void
}

export const CountdownContext = createContext({} as ICountdownContextData);

interface ICountdownProviderProps {
  children: React.ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: ICountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = useMemo(() => {
    return Math.floor(time / 60);
  }, [time])

  const seconds = useMemo(() => {
    return time % 60;
  }, [time])

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => { setTime(time - 1) }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }

    return () => clearTimeout(countdownTimeout);
  }, [isActive, time]);


  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}
    >
      {children}
    </CountdownContext.Provider>
  );
}