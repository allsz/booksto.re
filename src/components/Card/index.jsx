import styles from './style.module.css'

function Card(book) {
    return (
        <>
            <div className={styles.container} style={{ '--bg-color': book.bgColor, '--hover-bg-color': book.hoverBgColor }}>
                <img className={styles.cover} src={book.cover} alt={book.title} />
                <div>
                    <h1 className={styles.title}>{book.title}</h1>
                    <p className={styles.author}>{book.author}</p>
                    <p className={styles.description}>{book.description}</p>
                    <p className={styles.quant}>{book.quant}</p>
                    <a href={book.link} target="_blank" rel="noreferrer">
                        <button className={styles.button}>Comprar Agora</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Card