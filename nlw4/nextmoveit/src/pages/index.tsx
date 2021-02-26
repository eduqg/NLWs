import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile';
import CompleteChallenges from '../components/CompleteChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';

interface IHomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: React.FC<IHomeProps> = ({ level, currentExperience, challengesCompleted }) => {
  return (
    <ChallengesProvider level={level} currentExperience={currentExperience} challengesCompleted={challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompleteChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

// Roda no servidor Node do Next.js
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = context.req.cookies;

  // console.logs aqui são exibidos no terminal

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

export default Home;

