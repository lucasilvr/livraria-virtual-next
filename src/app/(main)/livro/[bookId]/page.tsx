import Image from "next/image";
import { notFound } from "next/navigation";
import BookActions from "@/components/BookActions";
import styles from "./page.module.css";
import type { Book } from "@/types";

async function getBookByIdFromAPI(id: string): Promise<Book | null> {
  try {
    const response = await fetch(`http://localhost:3333/livros/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data: Book = await response.json();
    return data;
  } catch (error) {
    console.error(`Falha ao buscar o livro com ID ${id}.`, error);
    return null;
  }
}

export default async function BookDetailsPage({
  params,
}: {
  params: { bookId: string };
}) {
  const book = await getBookByIdFromAPI(params.bookId);

  if (!book) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.bookDetailsWrapper}>
        <div className={styles.bookDetails}>
          <div className={styles.coverWrapper}>
            <Image
              src={book.capa}
              className={styles.cover}
              alt={book.titulo}
              width={300}
              height={400}
            />
          </div>
          <div className={styles.info}>
            <h1>{book.titulo}</h1>
            <h2>{book.autor}</h2>
            <h3>Sinopse</h3>
            <p>{book.sinopse}</p>
            <BookActions preco={book.preco} />
          </div>
        </div>
      </div>
    </div>
  );
}
