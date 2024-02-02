import {useContext} from 'react'
import {AppContext} from '@/Context/AppContext'
import Link from 'next/link'
import styles from './index.module.css'



const Menu = () =>{
    const {token} = useContext(AppContext)
 

    const getOut = e =>{
        e.preventDefault()
        let applications = ['token', 'user', 'role', 'info_box', 'find_journal', 'box_id', 'year', 'name_journal', 'journals']
        context.setToken(null)
        context.setName(null)
        context.setRoleSave(null)
        context.setFindJournal()

        
        setToken('')
        toMain('/')
       
    }
  

    return(
        <div className={styles.container_box}>
            <Link className={styles.logo} href={`${process.env.PATH}/`} ></Link>
            
            <div className={styles.menu_bar}>
                {token && <div className={styles.container_column} >
                    <div className={styles.log_in}></div>
                    <div className={styles.menu_title}>Войти</div>
                </div> }
                
                {token && <div className={styles.container_column}>
                        <div className={styles.avatar}></div>
                        <div className={styles.menu_title}>{name}</div>
                </div>}
                <Link className={styles.container_column} href={`${process.env.PATH}/find`}>
                        <div className={styles.search}></div>
                        <div className={styles.menu_title}>Поиск журналов</div>
                </Link>
                {token && <div className={styles.container_column} onClick={getOut}>
                        <div className={styles.log_out} ></div>
                        <div className={styles.menu_title}>Выйти</div>
                </div>}

                    
            </div>
        </div>
    )
}

export default Menu