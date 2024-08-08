import { useState } from "react";
import Styles from "./Styles/Forms.module.css"
const API_URL = 'https://interview.t-alpha.com.br/api';

const Forms = (({ action }) => {
    const [id, setId] = useState()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [error, setError] = useState("")
    const [sucess, setSucess] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await fetch(`${API_URL}/products/${action === 'update' ? `update-product/${id}` : action === "delete" ? `delete-product/${id}` : "create-product"}`, {
                method: action === 'delete' ? 'DELETE' : action === 'update' ? 'PATCH' : 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: action === 'add' || action === "update" ? JSON.stringify({
                    name: name,
                    description: description ? description : null,
                    price: Number(price),
                    stock: Number(stock),
                }) : null,
            });

            setSucess(action === "add" ? "Produto adicionado com sucesso" : action === "update" ? "Produto atualizado com sucesso" : "Produto deletado com sucesso")
            setTimeout(() =>{
                window.location.reload()
            }, 1300)
        } catch (e) {
            setError("Ocorreu um erro ao adicionar o produto: " + e.message)
        }
    };

    return (
        <>
            {action === "add" || action === "update" ? (
                <form onSubmit={handleSubmit}>
                    {action === "add" ? (
                        <h1>Criar produto</h1>
                    ) : (
                        <>
                            <h1>Atualizar produto</h1>
                            <input type="number"
                                name="productId"
                                placeholder="ID do produto"
                                id="product-id"
                                onChange={(e) => { (setId(e.target.value)) }}
                                required
                            />
                        </>
                    )}
                    <input type="text"
                        name="productName"
                        id="product-name"
                        placeholder="Nome do produto"
                        minLength={2}
                        maxLength={50}
                        onChange={(e) => { (setName(e.target.value)) }}
                        required
                    />
                    <textarea
                        name="productDescription"
                        id="product-description"
                        placeholder="Descrição"
                        maxLength={100}
                        onChange={(e) => { (setDescription(e.target.value)) }}
                    />
                    <input type="number"
                        name="productPrice"
                        placeholder="Preço"
                        id="product-price"
                        onChange={(e) => { (setPrice(e.target.value)) }}
                        required
                    />
                    <input type="number"
                        name="productStock"
                        placeholder="Quantidade de estoque"
                        id="product-stock"
                        onChange={(e) => { (setStock(e.target.value)) }}
                        required
                    />
                    <button type="submit">{action === "add" ? "Criar Produto" : "Atualizar Produto"}</button>
                </form>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h1>Deletar produto</h1>
                    <input type="number"
                        name="productId"
                        placeholder="ID do produto"
                        id="product-id"
                        onChange={(e) => { (setId(e.target.value)) }}
                        required
                    />
                    <button type="submit">Deletar produto</button>
                </form>
            )}

            {error && <p>{error}</p>}
            {sucess && <p>{sucess}</p>}
        </>
    )
})

export default Forms