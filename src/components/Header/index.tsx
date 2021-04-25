import styles from './styles.module.scss';

export function Header() {
  //Para pegar data
  const currentDate = new Date().toLocaleDateString( );

  return (
    <header className={ styles.headerContainer }>
      <img src="/logo.svg" alt="Podcastr"/>

      <p>O melhor para você ouvir, sempre</p>

      <span>Qui, 8 Abril</span>
    </header>
  );
}