import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = useMemo(() => {
    return Math.floor(time / 60);
  }, [time])

  const [minuteLeft, minuteRight] = useMemo(() => {
    return String(minutes).padStart(2, '0').split('');
  }, [minutes])

  const seconds = useMemo(() => {
    return time % 60;
  }, [time])

  const [secondLeft, secondRight] = useMemo(() => {
    return String(seconds).padStart(2, '0').split('');
  }, [seconds])

  const startCountDown = useCallback(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    console.log('teste');
    if (active && time > 0) {
      setTimeout(() => { setTime(time - 1) }, 1000);
    }
  }, [active, time]);

  return (
    <div>

      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountDown}
      >
        Iniciar um ciclo
    </button>
    </div>
  );
}

export default Countdown;