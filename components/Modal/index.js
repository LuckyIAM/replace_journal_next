import React,{useContext, useState}from 'react'
import { Context } from '@/Context/AppContext'
import styles from './index.module.css'

console.log(process.env.PATH);
 async function getToken(){
    const res = await fetch(`$process.env.PATH}api/new_in_lib/${params.id}`)
    const result = await res.json()
    return {props: { result }}
}

const Modal = ({isActive, changeActiv}) => {
    const {api, setToken, setName,  flagReg, setFlagReg, setRoleSave} = useContext(Context)
    const [mail, setMail] = useState("")
    const [psw, setPsw] = useState("")
    const [nameReg, setNameReg] = useState("")
    const [role, setRole] = useState('')

    const warning = document.querySelector('.warning')
    /*
    const popup = document.querySelector('.popup')

    */

    
   
    const handler = e => {
        e.preventDefault()
        if(mail === '' && psw === ''){
           warning.innerHTML = 'Вводите ваши данные' 
        }else if(mail !== '' && psw !== ''){
            api.logIn({'mail': mail, 'password': psw})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.token){
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('user', data.name)
                    localStorage.setItem('role', data.role)
                    setToken(data.token)
                    setName(localStorage.getItem('user'))
                    setRoleSave(localStorage.getItem('role'))
                    setMail('')
                    setPsw('')
                    changeActiv(false)
                    warning.innerHTML = ''
                    window.location.reload()
                }else if (data.message){
                    warning.innerHTML = data.message
                }
                    
            })
        } 
    }
    const handler2 = e => {
        e.preventDefault()
        if(nameReg !== '' && mail !== '' && psw !== ''){
            if(role === ''){
                setRole('USER')
            }
            api.registration({name: nameReg, mail: mail, password: psw, role: role})
                .then(res => res.json())
                .then(data => {
                    if(data.token){
                        console.log(data);
                        localStorage.setItem('token', data.token)
                        localStorage.setItem('user', data.name)
                        localStorage.setItem('role', data.role)
                        setToken(localStorage.getItem('token'))
                        setName(localStorage.getItem('user'))
                        setRoleSave(localStorage.getItem('role'))
                        changeActiv(false)
                        setNameReg('')
                        setMail('')
                        setPsw('')
                        setRole('')
                        setFlagReg(false)
                        warning.innerHTML = ''
                    }else if(data.message){
                        warning.innerHTML = data.message
                    }
                })
        }else{
            warning.innerHTML = `Заполните все поля`
        }
        window.location.reload()
    }

    const goOut = e => {
        e.preventDefault()
        changeActiv(false)
        warning.innerHTML = ''
    }

    const getRegstrn = e => {
        if(mail === '' && psw === ''){
            e.preventDefault()
            setFlagReg(true)
            warning.innerHTML = ''
        }
    }
    const getLogin = e => {
        if(nameReg === '' && mail === '' && psw === ''){
            e.preventDefault()
            setFlagReg(false)
            warning.innerHTML = ''
        }
    }
   /*
   const closeModal = (e) =>{
        if(popup !== e.target){
            changeActiv(false)
            warning.innerHTML = ''
        }
    }
    */

    return<>
        {console.log(result)}
        {!flagReg ? <div className={isActive ? "popup-box active" : "popup-box"} /*onClick={closeModal}*/>
        <div className={styles.close_icon} onClick={goOut}></div>
        
            <div className={styles.popup}>
                <form  className ={styles.modal_form} onSubmit={handler}>
                    <div className={styles.conteiner_colum}>
                        <label htmlFor='mail'>Введите email</label>
                        <input 
                        id='mail'
                        type='email'
                        value={mail}
                        placeholder='xxxx@xxxx.xx'
                        onChange={e => setMail(e.target.value)}></input>
                    </div>
                    <div className={styles.conteiner_colum}>
                        <label htmlFor='password'>Введите пароль</label>
                        <input 
                        id='password'
                        type='password'
                        value={psw}
                        onChange={e => setPsw(e.target.value)}></input>
                    </div>
                    <div className={styles.button_box}>
                        <button className = {styles.btn} type='submit' >Войти</button>
                        <button className = {styles.reg} type='submit'  onClick={getRegstrn}>Регистрироваться</button>
                    </div>
                </form>

                <div className={styles.warning}></div>
                
            </div>
            
        </div>:
        <div className={isActive ? 'styles.active' : 'styles.popup-box'} /*onClick={closeModal}*/>
        <div className={styles.close2_icon} onClick={goOut}></div>
        
            <div className={styles.popup_reg}>
                <form  className ={styles.modal_form} onSubmit={handler2}>
                <div className={styles.conteiner_colum}>
                        <label htmlFor='name'>Введите имя</label>
                        <input 
                        id='name'
                        type='text'
                        value={nameReg}
                        placeholder='Anna'
                        onChange={e => setNameReg(e.target.value)}></input>
                    </div>
                <div className={styles.conteiner_colum}>
                        <label htmlFor='mail'>Введите email</label>
                        <input 
                        id='mail'
                        type='email'
                        value={mail}
                        placeholder='xxxx@xxxx.xx'
                        onChange={e => setMail(e.target.value)}></input>
                    </div>
                    
                    <div className={styles.conteiner_colum}>
                        <label htmlFor='password'>Введите пароль</label>
                        <input 
                        type='password'
                        value={psw}
                        onChange={e => setPsw(e.target.value)}></input>
                    </div>
                    <div className={styles.conteiner_colum}>
                        <label htmlFor='role'>Введите роль</label>
                        <input 
                        id='role'
                        type='text'
                        value={role}
                        placeholder='user'
                        onChange={e => setRole(e.target.value)}></input>
                    </div>
                    <div className={styles.button_box}>
                        <button className = {styles.reg} type='submit' >Регистрироваться</button>
                        <button className = {styles.btn} type='submit' onClick={getLogin}>Войти</button>
                    </div>
                    
                </form>

                <div className='warning'></div>
                
            </div>
            
        </div>}
    </>
}


export default Modal