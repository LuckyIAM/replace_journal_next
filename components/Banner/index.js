import React from 'react'
import styles from './index.module.css'

const Banner = () =>{

    return<>
        <header className={styles.body_of_main}>
            <div className={styles.banner_img}></div>
            <div className={styles.title}>
                {window.innerWidth >= 1300 ?<h1>Журналы
                Российской <br/>
                государственной <br/>
                библиотеки искусств
                </h1>
                : 
                <h1>Журналы Российской государственной библиотеки искусств</h1>
                }
            </div>
                
        </header>
    </>
}

export default Banner



