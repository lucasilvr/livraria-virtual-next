"use client";
import { useState } from 'react';
import type { Book } from '@/types';
import SearchBar from '../SearchBar';
import BookCardGenre from '../BookCardGenre';
import styles from './styles.module.css';

export default function GenreList({ initialBooks }: { initialBooks: Book[] }) {
  const [filtro, setFiltro] = useState("");
  const livrosFiltrados = initialBooks.filter((book) =>
    book.titulo.toLowerCase().includes(filtro.toLowerCase())
  );
  return (
    <>
      <div className={styles.searchContainer}>
        <SearchBar filtro={filtro} onFiltroChange={setFiltro} placeholder="Buscar por título..." />
      </div>
      <div className={styles.cardList}>
        {livrosFiltrados.map((book) => (
            <BookCardGenre
              key={book.id}
              id={book.id}
              titulo={book.titulo}
              autor={book.autor}
              preco={book.preco}
              capa={book.capa}
            />
        ))}
      </div>
    </>
  );
}