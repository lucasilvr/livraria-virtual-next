import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

interface BookCardProps {
  id: number;
  titulo: string;
  autor: string;
  preco: number;
  capa: string;
}

export default function BookCardHome({ id, titulo, autor, preco, capa }: BookCardProps) {
  return (
    <Link href={`/livro/${id}`} className={styles.card}>
      <Image src={capa} alt={titulo} width={120} height={180} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{titulo}</h3>
        <p className={styles.cardAuthor}>{autor}</p>
        <p className={styles.cardPrice}>R$ {preco.toFixed(2).replace('.', ',')}</p>
      </div>
    </Link>
  );
}