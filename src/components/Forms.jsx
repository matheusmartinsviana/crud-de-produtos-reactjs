import { useState } from "react";
import Styles from "./Styles/Forms.module.css"
const API_URL = 'https://interview.t-alpha.com.br/api/';

const Forms = (({ action }) => {
    const [id, setId] = useState()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [error, setError] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const response = await fetch(`${API_URL}products/${action === 'update' ? `update-product/${id}` : action === "delete" ? `delete-product/${id}` : "create-product"}`, {
                method: action === 'delete' ? 'DELETE' : action === 'update' ? 'PUT' : 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: action === 'add' || update === "update" ? JSON.stringify({
                    name: name,
                    description: description ? description : null,
                    price: Number(price),
                    stock: Number(stock),
                }) : null,
            });
            console.log(requestBody)
            if (!response.ok) {
                setError("Ocorreu um erro ao adicionar o produto")
            }

        } catch (e) {
            console.log(e.message)
        }
    };

    return (
        <>
            {action === "add" ? (
                <form onSubmit={handleSubmit}>
                    <h1>Crie um produto</h1>
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
                    <button type="submit">Criar produto</button>
                </form>
            ) : action === "update" ? (
                <form action="#">update</form>
            ) : (
                <form action="#">delete</form>
            )}

            {error && <p>{error}</p>}
        </>
    )
})

export default Forms