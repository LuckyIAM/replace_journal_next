import React, {useState, useContext} from "react";
import {useNavigate} from 'react-router-dom'
import { Context } from "../../App";
import Loader from "../Loader/index";
import './style.css'


const UploadContainer = () => {
    const {api, setImportANDparse} = useContext(Context)
    const [selectedFile, setSelectedFile] = useState(null)
    const [nameFile, setNameFile] = useState('')
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate()

    let dataFromDB

    function goToParsing (e){
        e.preventDefault()
        navigate('/find')
    }

    function sendToServer(e){
        e.preventDefault()
        if(!selectedFile){
            alert('Выберите файл!')
            return
        }
        setImportANDparse(true)
        let  fData = new FormData()
        fData.append('file_up', selectedFile)
        fData.append('file_name', nameFile)

        api.uploadFile(fData)
            .then(res => res.json())
            .then(data => {
                dataFromDB = data
                let imported = document.querySelector('.request_text')
                imported.innerHTML = `Файл <b>${dataFromDB.file_name}</b> загружен и импортирован!<br/>`
                setSelectedFile('')
                setNameFile('')

                api.parsing({'file_meta': dataFromDB.file_name})
                .then(res => res.json())
                .then(data => {
                    setImportANDparse(false)
                    setFlag(true)
                })

            })
            .catch(error => console.log('error', error))
         
    }


    const handlerFile = e => {
        e.preventDefault()
        setSelectedFile(e.target.files[0])
    }

    const flagName = e =>{
        setNameFile(e.target.value)
    }

    return<>
    <main>
        <div className="box_main__upload">
            <div className="instruction">
                <h2 className='title2_instruction'>Приготовьте Файл к Загрузке</h2>
                <div className='instruction'>
                    <details  className="acordion">
                    <summary>Инструкция</summary> 
                    <ul>
                        <li>Файл имеет формат .csv;</li>
                        <li>Убедитесь в том что кодировка символов utf-8 и при открытье файл читаемый;</li>
                        <li>Имя файла уникальна.</li>
                    </ul>
                    </details>
                </div>
            </div>
            <div className="container__upload">
                <form className="upload">
                    <div className="colum">
                        <label htmlFor="flag__name">Укажите имя Файла</label>
                        <input className='upload__input'type="text"
                        placeholder="journal1"
                        value={nameFile}
                        onChange={flagName}/>
                        
                        <input id="file_u" 
                        type="file"
                        accept=".csv"
                        onChange={handlerFile}/>

                    </div>
                    <button className="button_banner" type='submit' onClick={sendToServer}>Отправить</button>
                </form>
                <div className={flag ? 'imported active': 'imported'}  data-path='parse' onClick={goToParsing}>
                    <div className="request_icon"></div>
                    <div className="request_text"></div>
                    <div className="link" data-path = 'find'>Переходите на страницу поиска</div>
                </div>
                <Loader/>
            </div>
        </div>
    </main>
    </>
}

export default UploadContainer