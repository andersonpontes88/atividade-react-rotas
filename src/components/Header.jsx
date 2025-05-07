import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { RiHomeFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';

export const Header = () => {
  // Obtém a localização atual da página
  const location = useLocation();
  // Estado para válidar as rotas
  const [isValidRoute, setIsValidRoute] = useState(true);

  useEffect(() => {
    // Lista de rotas válidas para o menu aparecer no header
    const validRoutes = [
      '/', // Pagina Inicial (Home)
      '/cart', // Pagina de Carrinho
      `/product/:id`, // Pagina de detalhes de um Produto
    ];

    // Verifica se a rota atual corresponde a algum das rotas válidas
    const routeExists = validRoutes.some((pattern) => {
      // Verifica se a rota dinamica (/product/:id) corresponde à rota atual
      if (pattern.includes(':')) {
        // Converte o padrão para uma expressão regular
        const regexPattern = pattern
          .replace(/:[^/]+/g, '[^/]+') // Substitui :id por qualquer coisa que não seja /
          .replace(/\//g, '\\/'); // Escapa as barras

        const regex = new RegExp(`^${regexPattern}$`);
        return regex.test(location.pathname);
      }
      // Para rotas estáticas, faz uma comparação direta
      return location.pathname === pattern;
    });
    // Define o estado com base na existência da rota
    setIsValidRoute(routeExists);
  }, [location]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Loja do Dev</h1>
      </div>

      {/* Os Menus de link só aparecem em rotas válidas */}
      {isValidRoute && (
        <div className={styles.links}>
          <ul>
            <Link to={'/'}>{<RiHomeFill className={styles.iconHome} size={20} />}</Link>
            <Link to={'/cart'}>{<FaCartShopping className={styles.iconCart} size={20} />}</Link>
          </ul>
        </div>
      )}
    </header>
  );
};
