import {createContext} from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: string;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  // numero do episódio na lista de ep
  currentEpisodeIndex: number;
  //Indicando que recebe uma função (PLAY)
  play: (episode: Episode) => void;
};


//Valor inicial pode ser qualquer coisa
//Não necessariamente seta um valor inicial, mas sim
//Define um tipo para o contexto
export const PlayerContext = createContext({} as PlayerContextData);