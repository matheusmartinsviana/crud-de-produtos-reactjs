import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from "./Styles/Register.module.css"
const Register = (() => {
    const [name, setName] = useState('')
    const [taxNumber, setTaxNumber] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch('https://interview.t-alpha.com.br/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    taxNumber: taxNumber,
                    mail: email,
                    phone: phone,
                    password: password
                })
            })

            if (!response.ok) {
                setError("Ocorreu um erro. Verifique suas credenciais");
            }

            
        } catch (e) {
            setError("Falha ao registrar o usúario. Tente novamente em alguns instantes");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Crie sua conta</h1>
            <div className={styles.inputGroup}>
                <input
                    name="name"
                    autoComplete="off"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="exemplo: Matheus"
                    minLength={3}
                    maxLength={30}
                    required
                />
                <input
                    name="cpnjCpf"
                    type="text"
                    value={taxNumber}
                    onChange={(e) => setTaxNumber(e.target.value)}
                    placeholder="CPF ou CPNJ"
                    maxLength={14}
                    minLength={11}
                    required
                />
                <input
                    name="email"
                    type="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@dominio.com"
                    required
                />
                <input
                    name="phone"
                    autoComplete="off"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Digite seu telefone"
                    required
                />
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    required
                />
                <button type="submit">Criar conta</button>
                <button><Link to="/login">Entrar</Link></button>
            </div>

            {error && <p>{error}</p>}
        </form>
    )
})

export default Register