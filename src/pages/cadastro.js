import styles from "../styles/Login.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import LoginCard from "@/components/loginCard/loginCard";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

import React, { useState } from "react";
import { registerUser } from "../utils/localStorage";

export default function CadastroPage() {
  // Estados para armazenar nome, email, senha e mensagens
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (event) => {
    // Função para lidar com o registro do usuário
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    const user = { nome, email, password };
    registerUser(user); // Chama a função para registrar o usuário
    setMessage(
      <p>
        Usuário cadastrado com sucesso! <br /> Faça o login agora.
      </p>
    );
    setNome("");
    setEmail("");
    setPassword("");
    setErrorMessage("");
  };

  return (
    <div className={styles.loginpage}>
      <Head>
        <title>Cadastre-se</title>
      </Head>
      <div className={styles.left_login}>
        <h4>
          Crie uma conta no Organiza <br /> e inicie o caminho para uma vida
          financeira mais organizada.
        </h4>
        <Image
          src="/login-animate3.svg"
          alt="Logo"
          width={450}
          height={250}
          priority
        />
      </div>
      <div className={styles.right_login}>
        <LoginCard title={"Crie sua conta"}>
          <form onSubmit={handleRegister} className={styles.form}>
            <Input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

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
            {/* Exibe mensagem de sucesso após o cadastro */}
            {message && (
              <p
                style={{
                  color: "#24e0a4",
                  fontSize: "0.8vw",
                  fontFamily: "Inter",
                }}
              >
                {message}
              </p>
            )}

            <Button type="submit">Cadastrar</Button>

            <div className={styles.link_acesso}>
              Já possui conta?{" "}
              <Link className={styles.link} href="/">
                fazer login
              </Link>
            </div>
          </form>
        </LoginCard>
      </div>
    </div>
  );
}
