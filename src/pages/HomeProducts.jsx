import React from 'react';
import monitorImg from '../images/monitor.png';
import keyboardImg from '../images/keyboard.png';
import cpuImg from '../images/cpu.png';
import styles from './HomeProducts.module.css';
import { Link } from 'react-router-dom';

// Array com dados dos produtos
const products = [
  { id: 1, name: 'Produto 1', price: 800.0, image: monitorImg },
  { id: 2, name: 'Produto 2', price: 200.0, image: keyboardImg },
  { id: 3, name: 'Produto 3', price: 1500.0, image: cpuImg },
];

export const HomeProducts = () => {
  return (
    <section className={styles.products}>
      <h1>Página Inicial com os Produtos</h1>

      <div className={styles.productsContainer}>
        {/* Renderização dos produtos */}
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h2>{product.name}</h2>
            <p>Preço: R$ {product.price}</p>
            <img src={product.image} alt={product.name} />

            <p>
              <Link to={`/product/${product.id}`}>Ver detalhes</Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
