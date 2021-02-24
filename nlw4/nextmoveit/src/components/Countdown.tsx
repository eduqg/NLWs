import styles from '../styles/components/Countdown.module.css';

const Countdown: React.FC = () => {
  return (
    <div>

    <div className={styles.countdownContainer}>
     <div>
       <span>4</span>
       <span>2</span>
     </div>
     <span>:</span>
     <div>
       <span>4</span>
       <span>2</span>
     </div>
    </div>
    
    <button type="button" className={styles.countdownButton}>
      Iniciar um ciclo
    </button>
    </div>
  );
}

export default Countdown;