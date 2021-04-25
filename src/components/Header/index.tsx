import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import ptBr from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header() {
  //Para formatar a data (cada biblioteca tem uma string de formatação)
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={ styles.headerContainer }>
      <img src="/logo.svg" alt="Podcastr"/>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  );
}