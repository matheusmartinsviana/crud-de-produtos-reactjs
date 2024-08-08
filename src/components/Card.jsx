import styles from "./Styles/Card.module.css"

const Card = (({ id, name, description, price, stock }) => {
    return (
        <section>
            <p>ID do Produto: {id}</p>
            <p>Nome: {name}</p>
            <p>Descrição: {description}</p>
            <p>Preço: {price}</p>
            <p>Quantidade em estoque: {stock}</p>
        </section>
    );
})

export default Card