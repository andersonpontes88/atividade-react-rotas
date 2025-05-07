import styles from './PageNotFound.module.css';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <section className={styles.container}>
      <div>
        <h2>Página Não Encontrada!</h2>
        <h4>Clique no link abaixo para voltar a Tela Inicial de Produtos</h4>

        <FaCog className={styles.iconGear} />

        <button className={styles.btn}>
          <Link to='/'>Voltar</Link>
        </button>
      </div>
    </section>
  );
};
