import { useState } from "react";
import Styles from "./Styles/Forms.module.css"
const API_URL = 'https://interview.t-alpha.com.br/api/';

const Forms = (({ action }) => {
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [stock, setStock] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}products/${action === 'update' ? `update-product/${id}` : action === "delete" ? `delete-product/${id}` : "create-product"}`, {
                method: action === 'delete' ? 'DELETE' : action === 'update' ? 'PUT' : 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: action !== 'delete' ? JSON.stringify(requestBody) : null,
            });

            if (response.ok) {
                console.log(response.json())
                if (action !== 'delete') window.location.reload();
            } else {
                const errorMessage = await response.json()
                setError(errorMessage)
            }
        } catch (e) {
            console.log(e.message)
        }
    };

    return (
        <forms>

        </forms>
    )
})

export default Forms