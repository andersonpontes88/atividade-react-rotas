import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';
import monitorImg from '../images/monitor.png';
import keyboardImg from '../images/keyboard.png';
import cpuImg from '../images/cpu.png';

// Componente para exibir detalhes de um único produto
// Este componente pode ser usado para exibir detalhes de um produto específico
const details = [
  {
    id: 1,
    name: 'Monitor 27',
    price: 800.0,
    img: monitorImg,
    description: 'Monitor de 27 polegadas com resolução Full HD.',
  },
  {
    id: 2,
    name: 'Teclado Gamer',
    price: 200.0,
    img: keyboardImg,
    description: 'Monitor de 27 polegadas com resolução Full HD.',
  },
  {
    id: 3,
    name: 'CPU Gamer',
    price: 1500.0,
    img: cpuImg,
    description: 'Monitor de 27 polegadas com resolução Full HD.',
  },
];

export const ProductDetails = () => {
  // Aqui você pode adicionar lógica para buscar os detalhes do produto com base no ID
  // Por exemplo, você pode usar o useParams para obter o ID do produto da URL
  const { id } = useParams();
  const product = details.find((product) => product.id === parseInt(id));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cardBox}>
          <h2>{product.name}</h2>
          <p>Preço: R$ {product.price}</p>
          <p>{product.description}</p>
        </div>

        <div className={styles.imgBox}>
          <img src={product.img} alt={product.name} />
        </div>
      </div>
    </section>
  );
};
