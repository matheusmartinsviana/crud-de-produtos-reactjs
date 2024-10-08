import { useEffect, useState } from "react";
import styles from "./Styles/ProductsView.module.css"
import { Link, useNavigate } from "react-router-dom";

const ProductsView = (() => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()

    const searchHandler = ((e) => {
        const lowerCase = e.target.value.toLowerCase()
        setSearch(lowerCase)
    })

    const filterData = products.filter((product) => search === "" ? product : product.name.includes(search))

    const deleteProduct = async ({ ...product }) => {
        setLoad(true)
        try {
            const response = await fetch(`https://interview.t-alpha.com.br/api/products/delete-product/${product.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })

            if (response.status === 204) {
                fetchData()
            }

            setLoad(false)
        } catch (e) {
            console.log(e.message)
        }
    }

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
        <div className="container">
            <h1>Produtos</h1>
            <input
                onChange={searchHandler}
                type="text"
                name="searchBar"
                id="search-bar"
                placeholder="Pesquise um produto"
            />

            {products.length > 0 ? (
                <div className={styles.cardsContainer}>
                    <table>
                        <caption>Produtos Registrados</caption>
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Quantidade em estoque</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData.length > 0 ? (filterData.map((product) => (
                                <tr key={product.id}>
                                    <td align="center">{product.id}</td>
                                    <td align="center">{product.name}</td>
                                    <td align="center">{product.description}</td>
                                    <td align="center">R${product.price}</td>
                                    <td align="center">{product.stock}</td>
                                    <td align="center">
                                        <div className={styles.actions}>
                                            {/* <button><Link to="/update">Atualizar</Link></button> */}
                                            <button onClick={(e) => { deleteProduct(product) }}>Deletar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))) : (
                                <tr>
                                    <td align="center">Nenhum produto encontrado</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
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