
import { useContext } from 'react'
import Link from 'next/link'
import {Context} from "@/Context/AppContext"
import styles from './index.module.css'


const Cards = ({icon, name, text, link, path}) =>{
    const {roleSave} = useContext(Context)
    const goTo = useNavigate()

    const cardIcon={
        backgroundImage: `url(${icon})`, 
        backgroundColor: "#fff",
        backgroundSize: 'cover',
        backgroundrepeat: 'no-repeat',
        width: window.innerWidth > 800 ? '200px' : '150px',
        height: window.innerWidth > 800 ? '200px' : '150px',
        border: '1px solid #fff',
        margin: '30px 30px 30px 50px',
        boxSizing: 'border-box',
    }

    const cardBoxWidth = {
        width: `100%`
    }


    return<>
        {token && <>
            {roleSave !== 'ADMIN' && name === 'Пойск данных' && <Link className={styles.card_box} href = {`/${e.currentTarget.dataset.path}`} style={cardBoxWidth} data-path={path}>
                <div className={styles.card__icon} style={cardIcon}></div>
                <div className={styles.container_textcard}>
                    <div className={styles.card_name}>{name}</div>
                    <div className={styles.text_card}>{text}</div>
                    <div className={styles.link}>{link}</div>
                </div>
            </Link>}
            {roleSave === 'ADMIN' && <Link className={styles.card_box} href = {`/${e.currentTarget.dataset.path}`} style={cardBoxWidth} data-path={path} >
                <div className={styles.card__icon} style={cardIcon}></div>
                <div className={styles.container_textcard}>
                    <div className={styles.card_name}>{name}</div>
                    <div className={styles.text_card}>{text}</div>
                    <div className={styles.link}>{link}</div>
                </div>
            </Link>}
        </>
        } 
    </>
}

export default Cards