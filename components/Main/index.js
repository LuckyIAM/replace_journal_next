import {useContext} from 'react'
import { Context } from "../../Context/AppContext"
import Card from '../Card/index'
import styles from './index.module.css'

const objData = [
    {
        icon: '../../image/load_file.png',
        title: 'Загрузка файла',
        text: 'В данном разделе загружаете фаилы с данными в базе',
        link: 'Перейти к загруске',
        path: 'upload'
    },
    {
        icon: '../../image/search_data.png',
        title: 'Пойск данных',
        text: 'Для осушествление пойска журналов используите этот раздел', 
        link: 'Перейти к пойску',
        path: 'find'
    }
]


const Main = () => {
    const {token} = useContext(Context)
    
    return<>
    {token && <main className={styles.main_container}>
        <h2>Работа с  журналами</h2>
        <div className={styles.cards_container}>
            {objData.map( (elem, i) => <Card
            key={i}
            icon = {elem.icon}
            name = {elem.title}
            text = {elem.text}
            link = {elem.link}
            path={elem.path}
            />)}
        </div>
    </main>}
    {!token && <main className={styles.main_container}>
        <h2>Работа с  журналами доступна после авторизации</h2>
        </main>}
    </>
}

export default Main