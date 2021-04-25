import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import { api } from '../services/api';
import { ptBR } from 'date-fns/locale';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: string;
  durationAsString: string;
  url: string;
  publishedAt: string;
}

type HomeProps = {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//Usando SSG (funciona apenas em produção)
//Gera uma versão estática da página, apenas
//mudando o conteudo em um período de tempo
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params:{
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  //Manipulando informações vindas da API
  //1 - Formatando data de cada episodio antes de renderizar na página
  //2 - Convertendo duração para número
  const episodes = data.map(episode => {
    return{
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }) ,
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url
    };
  })

  return{
    props:{
      episodes: episodes,
    },
    revalidate: 60 * 60 *8,
  }
}


//Usando SSR
//Next irá executar essa função antes de renderizar conteúdo
//Toda vez que página home é acessada
//Executado na camada Next (server Node)

/*export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    props:{
      episodes: data,
    }
  }
}*/

