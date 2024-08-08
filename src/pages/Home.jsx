import ProductsView from '../components/ProductsView';
import styles from './Styles/Home.module.css'

const Home = (() => {
    return (
        <main className={styles.HomeContainer}>
            <ProductsView />
        </main>
    );
})

export default Home