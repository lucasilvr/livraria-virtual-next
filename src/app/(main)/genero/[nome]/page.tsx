import Link from "next/link";
import GenreList from "@/components/GenreList";
import styles from "./page.module.css";
import type { Book } from "@/types";

async function getBooksByGenreFromAPI(genre: string): Promise<Book[]> {
  try {
    const response = await fetch(
      `http://localhost:3333/livros?genero=${encodeURIComponent(genre)}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error("Erro na resposta da API:", response.status);
      return [];
    }

    const data: Book[] = await response.json();
    return data;
  } catch (error) {
    console.error(`Falha ao buscar livros do gênero ${genre}.`, error);
    return [];
  }
}

export default async function GeneroPage({
  params,
}: {
  params: { nome: string };
}) {
  const genreName = decodeURI(params.nome);
  const books = await getBooksByGenreFromAPI(genreName);

  return (
    <div className={styles.container}>
      <Link href="/home" className={styles.backLink}>{`< ${genreName}`}</Link>
      <GenreList initialBooks={books} />
    </div>
  );
}
