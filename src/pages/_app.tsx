import '../styles/global.scss'

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import { PlayerContext } from '../contexts/PlayerContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  //Criando estado para alterar valores do context
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);


  //Função passada para o context
  //Para que todas os componentes tenham acesso a estes estados
  function play(episode){
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
  }

  return(
    //Componentes dentro do provider terão acesso a informação do contexto
    <PlayerContext.Provider value={{episodeList, currentEpisodeIndex, play}}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp
