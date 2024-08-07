import Styles from "./Styles/Forms.module.css"
const API_URL = 'https://interview.t-alpha.com.br/api/';

const Forms = (({ action }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/${type}/${action === 'update' || action === 'delete' ? id : ''}`, {
                method: action === 'delete' ? 'DELETE' : action === 'update' ? 'PUT' : 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                },
                body: action !== 'delete' ? JSON.stringify(requestBody) : null,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (onItemAdded) onItemAdded(data);
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