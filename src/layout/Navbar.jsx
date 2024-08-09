import { Link } from "react-router-dom";
import styles from './Styles/Navbar.module.css'

const Navbar = (() => {
    return (
        <nav className={styles.navbarContainer}>
            <h1>CRUD de Produtos</h1>
            <ul>
                <li>
                    <Link to="/" >Ver produtos</Link>
                </li>
                <li>
                    <Link to="/add" >Adicionar Produto</Link>
                </li>
                <li>
                    <Link to="/update" >Atualizar Produto</Link>
                </li>
                <li>
                    <Link to="/delete" >Deletar Produto</Link>
                </li>
            </ul>
        </nav>
    );
})

export default Navbar