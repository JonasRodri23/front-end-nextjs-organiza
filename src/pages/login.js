import styles from '../styles/Login.module.css'
import Link from 'next/link'
import Image from 'next/image'

import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '../components/button/button'

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '../utils/localStorage';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    const user = { email, password };
    event.preventDefault();
    if (loginUser(user)) {
        // Login bem-sucedido, redirecione para a página de dashboard ou perfil
      router.push("/");
    } else {
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente ou crie uma conta.');
    }
  };
    
    return (
        <div className={styles.loginpage}>
            <div className={styles.left_login}>
                <h4>Conecte-se ao Organiza e gerencie suas finanças de forma eficaz.<br/>Faça login agora!</h4>
                <Image
              src="/login-animate.svg"
              alt="Logo"
              width={450}
              height={250}
              priority
                />
            </div>
            <div className={styles.right_login}>
            <LoginCard title={"Entre na sua conta"}>
                <form className={styles.form} onSubmit={handleLogin}>
                    <Input type="email" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    
                    <Input type="password" placeholder="Sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    {errorMessage && <p style={{ color: 'red', fontSize: '0.8vw', fontFamily: 'Inter'}}>{errorMessage}</p>}
                   
                    <Button type="submit">Entrar</Button>
                    <div className={styles.link_acesso}>Ainda não possui conta? <Link className={styles.link} href="/cadastro">cadastre-se</Link></div>
                </form>
           </LoginCard>
            </div>
        </div>
    )
}