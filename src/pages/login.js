import styles from '../styles/Login.module.css'
import Link from 'next/link'

import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '../components/button/button'

export default function LoginPage() {
    return (
        <div className={styles.background}>
            <LoginCard title={"Entre na sua conta"}>
                <form className={styles.form}>
                    <Input type="email" placeholder="Seu e-mail"/>
                    <Input type="password" placeholder="Sua senha"/>
                    <Button>Entrar</Button>
                    <Link href="/cadastro">Ainda não possui conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}