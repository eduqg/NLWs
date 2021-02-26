import Head from 'next/head';

import LoginGithub from '../components/LoginGithub';

import styles from '../styles/pages/Login.module.css';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Move.it</title>
      </Head>


      <section>
        <div />

        <div>
          <LoginGithub />
        </div>
      </section>
    </div>
  )
}


export default Login;

