"use client";
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

export default function BookActions({ preco }: { preco: number }) {
  const router = useRouter();
  const handleAddToCart = () => alert("Funcionalidade de carrinho não feita.");
  const handleGoBack = () => router.back();

  return (
    <div className={styles.actionsContainer}>
      <button onClick={handleGoBack} className={styles.backButton}>&lt; Detalhes do livro</button>
      <button className={styles.addToCartButton} onClick={handleAddToCart}>
        R$ {preco.toFixed(2).replace('.', ',')} | Adicionar ao carrinho
      </button>
    </div>
  );
}