import { useEffect, useState } from "react";
import styles from "./Styles/ProductsView.module.css"
import Card from "./Card";
import { Link } from "react-router-dom";

const ProductsView = (() => {
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false)

    const fetchData = async () => {
        setLoad(true)
        try {
            const response = await fetch('https://interview.t-alpha.com.br/api/products/get-all-products', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            const result = await response.json()
            setProducts(result.data.products)
            setLoad(false)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={styles.ProductsViewContainer}>
            <h1>Produtos</h1>
            <input
                type="text"
                name="searchBar"
                id="search-bar"
            />
            
            {products.length > 0 ? (
                <div className={styles.cardsContainer}>
                    {products.map((product) => (
                        <Card
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            stock={product.stock}
                        />
                    ))}
                </div>
            ) : load ? (
                <>
                    {load && <p>Carregando produtos...</p>}
                </>
            ) : (
                <>
                    <p>Nenhum produto foi adicionado ainda. <Link to="/add">Adicione um produto</Link></p>
                </>
            )}
        </div>
    );
})

export default ProductsView