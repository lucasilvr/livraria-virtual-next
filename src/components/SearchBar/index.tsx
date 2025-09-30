"use client";
import Image from "next/image";
import searchIcon from "@/assets/search.png";
import styles from "./styles.module.css";

interface SearchBarProps {
  filtro: string;
  onFiltroChange: (novoFiltro: string) => void;
  placeholder: string;
}

export default function SearchBar({ filtro, onFiltroChange, placeholder }: SearchBarProps) {
  return (
    <div className={styles.inputWrapper}>
      <Image src={searchIcon} alt="Ícone de busca" className={styles.inputIcon} width={20} height={20} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={filtro}
        onChange={(e) => onFiltroChange(e.target.value)}
      />
    </div>
  );
}