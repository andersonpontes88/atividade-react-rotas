import styles from './Footer.module.css';

export const Footer = () => {
  // Gera o ano atual
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <h4>
        &copy; {currentYear} Todos os direitos reservados. &reg; <span>Anderson Pontes Dev</span>.
      </h4>
    </footer>
  );
};
