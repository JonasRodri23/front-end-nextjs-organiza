import styles from '../styles/Login.module.css'
import Link from 'next/link'
import Image from 'next/image'

import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '../components/button/button'

export default function LoginPage() {
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
                <form className={styles.form}>
                    <Input type="email" placeholder="Seu e-mail"/>
                    <Input type="password" placeholder="Sua senha"/>
                    <Button>Entrar</Button>
                    <div className={styles.link_acesso}>Ainda não possui conta? <Link className={styles.link} href="/cadastro">cadastre-se</Link></div>
                </form>
           </LoginCard>
            </div>
        </div>
    )
}