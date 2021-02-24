import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile';
import CompleteChallenges from '../components/CompleteChallenges';
import Countdown from '../components/Countdown';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      
      <ExperienceBar />

      <section>

        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>

        <div>

        </div>
      </section>
    </div>
  )
}

export default Home;

