import Link from "next/link";
import Image from "next/image";
import BookCardHome from "@/components/BookCardHome";
import banner from "@/assets/banner-area.png";
import styles from "./page.module.css";
import type { Book } from "@/types";

export default async function Home() {
  let books: Book[] = [];

  try {
    const response = await fetch(`http://localhost:3333/livros`, {
      cache: "no-store",
    });

    books = await response.json();
  } catch (error) {
    console.error("Não foi possível buscar os livros.", error);
  }
  const generos = [...new Set(books.map((book) => book.genero))];

  return (
    <div className={styles.container}>
      <Image src={banner} alt="Banner" className={styles.banner} />
      {generos.map((genero) => (
        <section key={genero} className={styles.section}>
          <div className={styles.contentWrapper}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{genero}</h2>
              <Link href={`/genero/${genero}`} className={styles.verMaisBtn}>
                Ver mais
              </Link>
            </div>
            <div className={styles.cardList}>
              {books
                .filter((book) => book.genero === genero)
                .slice(0, 4)
                .map((book) => (
                  <BookCardHome
                    key={book.id}
                    id={book.id}
                    titulo={book.titulo}
                    autor={book.autor}
                    preco={book.preco}
                    capa={book.capa}
                  />
                ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
