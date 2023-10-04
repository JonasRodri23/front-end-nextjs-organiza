import styles from "../styles/Login.module.css";
import Link from "next/link";
import Image from "next/image";
import LoginCard from "../components/LoginCard";
import Input from "../components/Input";
import Button from "../components/Button";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../utils/localStorage";
import Head from "next/head";

export default function LoginPage() {
  // Estado para armazenar email, senha e mensagens de erro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  // Função para lidar com a tentativa de login
  const handleLogin = (event) => {
    const user = { email, password };
    event.preventDefault();
    if (loginUser(user)) {
      // Login bem-sucedido, redirecionar para a página de dashboard ou perfil
      router.push("/dashboard"); // Redireciona para a página de dashboard após o login
    } else {
      setErrorMessage(
        "Credenciais inválidas. Por favor, tente novamente ou crie uma conta."
      ); // Define a mensagem de erro se o login for mal-sucedido
    }
  };

  return (
    <div className={styles.loginpage}>
      <Head>
        <title>Organiza</title>
      </Head>
      <div className={styles.left_login}>
        <h4>
          Conecte-se ao Organiza e gerencie suas finanças de forma eficaz.
          <br />
          Faça login agora!
        </h4>
        <Image
          src="/login-animate.svg"
          alt="Logo"
          width={450}
          height={250}
          priority
        />
      </div>
      <div className={styles.right_login}>
        {/* Componente loginCard */}
        <LoginCard title={"Entre na sua conta"}>
          <form className={styles.form} onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Exibe mensagem de erro, se houver */}
            {errorMessage && (
              <p
                style={{ color: "red", fontSize: "0.8vw", fontFamily: "Inter" }}
              >
                {errorMessage}
              </p>
            )}

            <Button type="submit">Entrar</Button>
            <div className={styles.link_acesso}>
              Ainda não possui conta? {/* Link para a página de cadastro */}
              <Link className={styles.link} href="/cadastro">
                cadastre-se
              </Link>
            </div>
          </form>
        </LoginCard>
      </div>
    </div>
  );
}
