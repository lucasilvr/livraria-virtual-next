import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import botaoLogin from "@/assets/login.png";
import botaoShop from "@/assets/shop.png";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/home" className={styles.logo}>
        <Image src={logo} alt="Logo" width={60} height={39} priority />
      </Link>
      <div className={styles.headerButtons}>
        <Link href="/">
          <Image src={botaoLogin} alt="Login" className={styles.iconBtn} width={50} height={50} />
        </Link>
        <Link href="#">
          <Image src={botaoShop} alt="Shop" className={styles.iconBtn} width={50} height={50} />
        </Link>
      </div>
    </header>
  );
}