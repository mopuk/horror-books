
import styles from "./Book.module.css";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export default function Book() {

    const { title } = useParams()
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState(null);


    useEffect( () => {
        const loadJson = async () => {
        if (title) {
            try {
                const module = await import(`../data/${title.replace(/-/g, "_")}.json`);
                setData(module);
                setLoading(false);
            } catch (err) {
                console.error('Error loading JSON file: ', err);
            }
        }}

        const loadImage = async () => {
            try {
                const image = await import(`../assets/${title.replace(/-/g, "_").toLowerCase()}.jpg`)
                setImageSrc(image.default)
            } catch (err) {
                console.error('Error loading image: ', err);
            }
        }

        loadJson();
        loadImage();        
    }, [title]);

    if (loading) return (
        <div className={styles['spinner-container']}>
            <ClipLoader loading={loading} size={50} color="#3498db" className={styles.spinner}/>
        </div>
    )

    if (!data) return <div>No data</div> 

    return (
        <React.Fragment>
        <div className={styles.book}>
            <div className={styles.info} >

                <img src={imageSrc} alt={`${data.title}`} width={100} height={175}/>
                
                <h2 id="title">{data.title}</h2>
                <h4 id="author">by {data.author} ({data.year})</h4>

                <aside className={styles.side}>
                    <ul>
                    {
                        data.articles.map( article => {
                            return (
                                <li key={article.title}>
                                    <a href={`#${article.title.toLowerCase().replace(/ /g, "-")}`}>{article.title}</a>
                                </li>
                            )
                        })
                    }
                    </ul>
                </aside>
            </div>
            <div className={styles.articles}>
            {
                data.articles.map( article => {
                    
                    if (typeof article.content == 'object') {
                            {
                                return (
                                <article key={article.title} className={styles.article} id={article.title.toLowerCase().replace(/ /g, "-")}>
                                    <h2 className={styles.title} id={article.title}>
                                        {article.title}
                                    </h2>
                                    <ul className={styles.list}>
                                        {
                                            article.content.map( item => {
                                                return (
                                                <li key={item.title}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.content}</p>
                                                </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </article>
                                )
                            }
                    } else {
                            return (
                            <article key={article.title} className={styles.article} id={article.title.toLowerCase().replace(/ /g, "-")}>
                                <h2 className={styles.title}>{article.title}</h2>
                                <p>{article.content}</p>
                            </article>
                            )

                    }
                })
            }
            </div>
        </div>
        
        </React.Fragment>
    )
}