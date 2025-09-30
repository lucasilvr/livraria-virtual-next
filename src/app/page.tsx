"use client";
import Image from "next/image";
import imagem from "@/assets/background-login.jpg";
import logo from "@/assets/logo.svg";
import styles from "./page.module.css";
import { useLoginForm } from "@/hooks/useLogin";

export default function Login() {
  const { register, handleSubmit, errors, isSubmitting } = useLoginForm();

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src={imagem}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.formSection}>
        <div className={styles.formContent}>
          <div className={styles.logo}>
            <Image src={logo} alt="Logo" />
          </div>
          <div className={styles.texts}>
            <span>Bem vindo(a)!</span>
            <h1>Entre na sua conta</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label>E-mail</label>
            <input type="email" placeholder="Digite aqui o seu e-mail" {...register("email")} />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            <label>Senha</label>
            <input type="password" placeholder="Digite aqui a sua senha" {...register("password")} />
            {errors.password && <span className={styles.error}>{errors.password.message}</span>}
            <button className={styles.btnLogin} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Entrando..." : "Entrar"}
            </button>
            <button className={styles.btnRegister} type="button">Cadastre-se</button>
          </form>
        </div>
      </div>
    </div>
  );
}