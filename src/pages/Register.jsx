import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from "./Styles/Register.module.css"
import { validateCpnjCpf, validateEmail, validatePhone } from "../utils/regex"

const Register = (() => {
    const [name, setName] = useState('')
    const [taxNumber, setTaxNumber] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const [taxNumberError, setTaxNumberError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)

    const validate = () => {
        if (!validatePhone.test(phone)) {
            setPhoneError(true)
        } else {
            setPhoneError(false)
        }

        if (!validateCpnjCpf.test(taxNumber)) {
            setTaxNumberError(true)
        } else {
            setTaxNumberError(false)
        }

        if (!validateEmail.test(email)) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/")
        }
    })

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

            navigate("/login")
        } catch (e) {
            setError("Falha ao registrar o usúario. Tente novamente em alguns instantes");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.registerContainer}>
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
                {taxNumberError && <p>Este campo deve conter apenas números e ter 11 ou mais dígitos. Tente novamente</p>}
                <input
                    name="email"
                    type="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@dominio.com"
                    required
                />
                {emailError && <p>Digite um endereço de email valido.</p>}
                <input
                    name="phone"
                    autoComplete="off"
                    type="tel"
                    maxLength={14}
                    minLength={11}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Digite seu telefone"
                    required
                />
                {phoneError && <p>Este campo deve conter apenas números e 11 ou mais dígitos. Tente novamente</p>}
                <input
                    name="password"
                    type="password"
                    value={password}
                    minLength={6}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    required
                />
            </div>

            <div className={styles.buttons}>
                <button onClick={validate} type="submit">Criar conta</button>
                <button><Link to="/login">Entrar</Link></button>
            </div>
            {error && <p>{error}</p>}
        </form>
    )
})

export default Register