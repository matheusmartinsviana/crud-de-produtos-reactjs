import { useState } from "react"
import styles from "./Styles/Register.module.css"
const Register = (() => {
    const [name, setName] = useState('')
    const [taxNumber, setTaxNumber] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            fetch('https://interview.t-alpha.com.br/api/auth/register', {
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

            const result = await response.json();

            setToken(result.token);
            localStorage.setItem('token', result.token);
            localStorage.setItem('tokenExpiry', expiryTime);
            navigate('/')
        } catch (e) {
            setError("Falha ao registrar o usúario. Tente novamente em alguns instantes");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Crie sua conta</h1>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="exemplo: Matheus"
                    required
                />
                <input
                    type="text"
                    value={taxNumber}
                    onChange={(e) => setTaxNumber(e.target.value)}
                    placeholder="CPF ou CPNJ"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@dominio.com"
                    required
                />
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Digite seu telefone"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    required
                />
                <button type="submit">Criar conta</button>
            </div>

            {error && <p>{error}</p>}
        </form>
    )
})

export default Register