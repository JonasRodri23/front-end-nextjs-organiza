import styles from '../styles/Login.module.css'
import Link from 'next/link'
import Image from 'next/image'

import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '@/components/button/button'

export default function CadastroPage() {
    return (
        <div className={styles.loginpage}>
            <div className={styles.left_login}>
                <h4>Crie uma conta no Organiza <br/> e inicie o caminho para uma vida financeira mais organizada.</h4>
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
                <form className={styles.form}>
                    <Input type="text" placeholder="Seu nome"/>
                    <Input type="email" placeholder="Seu e-mail"/>
                    <Input type="password" placeholder="Sua senha"/>
                    <Button>Cadastrar</Button>
                    <div className={styles.link_acesso}>Já possui conta? <Link className={styles.link} href="/login">fazer login</Link></div>
                </form>
           </LoginCard>
            </div>
        </div>
    )
}
