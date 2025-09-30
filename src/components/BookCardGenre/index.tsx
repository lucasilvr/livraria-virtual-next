import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

interface BookCardGenreProps {
  id: number;
  titulo: string;
  autor: string;
  preco: number;
  capa: string;
}

export default function BookCardGenre({ id, titulo, autor, preco, capa }: BookCardGenreProps) {
  return (
    <Link href={`/livro/${id}`} className={styles.card}>
      <Image src={capa} alt={titulo} width={200} height={300} className={styles.cardImage} />

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{titulo}</h3>
        <div className={styles.cardFooter}>
          <p className={styles.cardAuthor}>{autor}</p>
          <p className={styles.cardPrice}>R$ {preco.toFixed(2).replace('.', ',')}</p>
        </div>
      </div>
    </Link>
  );
}