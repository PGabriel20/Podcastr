import { useEffect } from "react";
import { Header } from "../components/Header";

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
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

//Usando SSG (funciona apenas em produção)
//Gera uma versão estática da página, apenas
//mudando o conteudo em um período de tempo
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    props:{
      episodes: data,
    },
    revalidate: 60 * 80 *8,
  }
}