
import books from "../data.js"
import { useParams } from "react-router-dom";
import styles from "./Book.module.css";

export default function Book() {

    const { title } = useParams();
    const book = books.find( book => book.title.toLowerCase()=== title.toLocaleLowerCase().replace(/-/g, " "));


    if (!book) {
        return (
            <div>Book is not found</div>
        )
    } else {
        return (
                <div className={styles.book}>
                    <img src={book.image} />

                    <div className={styles.info} >
                        <h2 id="title">{book.title}</h2>

                        <h4 id="author">by {book.author} ({book.year})</h4>
                        {
                            book.description.split('\n').map( (text, ind) => (
                                <p key={ind} className={styles.text}>{text} <br /></p>
                            ))
                        }
                    </div>

                    <aside className={styles.side} >
                        <a href="#title" >{book.title}</a>
                        <a href="#author" >{book.author}</a>
                    </aside>
                    
                </div>
    )}
}