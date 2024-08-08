import { useEffect, useState } from "react";
import styles from "./Styles/ProductsView.module.css"

const ProductsView = (() => {
    const [products, setProducts] = useState([])

    const fetchData = async () => {
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
            {products ? (
                <>
                    {products.map((product) => (
                        <section className={styles.boxInfo} key={product.id}>
                            <p>{product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <p>{product.stock}</p>
                        </section>
                    ))}
                </>
            ) : (
                <>
                    Ainda não existe produtos adiconados.
                </>
            )}
        </div>
    );
})

export default ProductsView