import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import type { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}


export default MyApp
