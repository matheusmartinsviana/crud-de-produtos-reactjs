import { Link } from "react-router-dom";
import styles from './Styles/Navbar.module.css'

const Navbar = (() => {
    return (
        <nav className={styles.navbarContainer}>
            <ul>
                <li>
                    <Link to="/" >Ver produtos</Link>
                    <Link to="/add" >Adicionar Produto</Link>
                    <Link to="/update" >Atualizar Produto</Link>
                    <Link to="/delete" >Deletar Produto</Link>
                </li>
            </ul>
        </nav>
    );
})

export default Navbar