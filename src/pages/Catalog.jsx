
import books from '../data';
import title from '../assets/title.svg';
import {Link, Outlet, useOutlet} from "react-router-dom";

import styles from "./Catalog.module.css";


export default function Catalog() {

    const outlet = useOutlet();


    return (
        <>
            {outlet ?
                <Outlet />
            : 
            <main className={styles.main}>
                <img src={title} alt="" className={styles["main-title"]}/>

                <ul className={styles.books}>
                    {
                    books.map( book => (
                    <Link to={`/catalog/${book.title.toLowerCase().replace(/ /g, "-")}`} className={styles.book} key={book.id}>
                        <img className={styles.img} src={book.image} alt="" width={95} height={125} />
                        <div className={styles["book-info"]}>
                            <h3 className={styles.title}>{book.title}</h3>
                            <h4 className={styles.info}>by {book.author} ({book.year})</h4>

                            <p className={styles.description}>{book.description.length > 50 ? book.description.slice(0, 50) + "..." : book.description}</p>
                        </div>
                    </Link>
                        ))
                    }   
                </ul>
                
            </main>
            }
        </>
    )
}