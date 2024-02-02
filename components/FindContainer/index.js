import React, {useState, useContext, useEffect, useRef} from "react";
import { Context } from "../../App";
import Loader from "../Loader/index";
import JournalCard from "../JournalCard/index";
import './style.css'

const FindContainer = () => {
    const [journalName, setJournalName] = useState('')
    const [numberEdition, setNumberEdition] = useState('')
    const [numberBox, setNumberBox] = useState('')
    const [columns, setColumns] = useState('')
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [gap, setGap] = useState('')
    const cardResult = useRef()
    

    const {api, importANDparse, setImportANDparse, findJouranl, setFindJournal, setNameJournal, year, setYear} = useContext(Context)

    useEffect(() => {
        if(window.innerWidth >= 1400){
            setColumns(`repeat(3, 1fr)`)
            setGap(`50px 130px`)
        }else if(window.innerWidth < 1400 && window.innerWidth >= 705){
            setGap(`50px 130px`)
            setColumns(`repeat(2, 1fr)`)
        }else if( window.innerWidth < 705){
            setColumns(`1fr`)
            setGap(`50px 130px`)
        }
        setX(cardResult.current.getBoundingClientRect().x )
        setY(cardResult.current.getBoundingClientRect().y)
    }, [findJouranl])
    

    const cards = {
        display: 'grid',
        gridTemplateColumns: columns,
        gap: gap,
    }
    
    const sendToServer = e => {
        e.preventDefault()
        setImportANDparse(true)
        localStorage.setItem('name_journal', journalName)
        
        if((journalName && year && numberEdition) || (journalName && year && !numberEdition) ||(journalName && !year && !numberEdition)){api.find({'data_search': journalName})
            .then(res => res.json())
            .then(dt => {
                let data = dt
                let arr = []
                let res = []
                if(journalName && !year && !numberEdition){
                    localStorage.setItem('find_journal', JSON.stringify(data))
                    setFindJournal(data)
                }else if(journalName && year && !numberEdition){
                    if(data){
                        data.forEach((elem) => {
                            if(elem.name_journal.includes(year)){
                                arr.push(elem)
                            }
                        })
                    }
                    localStorage.setItem('find_journal', JSON.stringify(arr))
                    setFindJournal(arr)
                }else if(journalName && year && numberEdition){
                    localStorage.setItem('find_journal', JSON.stringify(data))
                    if(data){
                        data.forEach((elem) => {
                            if(elem.name_journal.includes(year)){
                                arr.push(elem)
                            }
                        })
                    } 
                    if(arr){
                        arr.forEach(e => {
                            if(e.name_journal.includes(numberEdition)){
                                res.push(e)
                            } 
                        })
                    }
                    localStorage.setItem('find_journal', JSON.stringify(res))
                    setFindJournal(res)
                }else if(!journalName && year && !numberEdition){
                    localStorage.setItem('find_journal', JSON.stringify(data))
                    setFindJournal(data)
                }
                
                setFindJournal(JSON.parse(localStorage.getItem('find_journal')))                  
                setImportANDparse(false)
                setNameJournal(localStorage.getItem('name_journal'))
                setJournalName('')
                setYear('')
                setNumberEdition('')
                window.scrollTo(x, y);

            })
        }
        if(!journalName && year && !numberEdition){
            api.find({'year': year})
            .then(res => res.json())
            .then(dt => {
                let data = dt
                localStorage.setItem('find_journal', JSON.stringify(data))
                setFindJournal(data)                 
                setImportANDparse(false)
                setNameJournal(localStorage.getItem('name_journal'))
                setJournalName('')
                setYear('')
                setNumberEdition('')
                window.scrollTo(x, y);
            })
        }
        
    }

    function sendToServerNumberBox(e){
        e.preventDefault()
        setImportANDparse(true)
        if(numberBox){
            api.getDataFromNumberBox({num_box: numberBox})
            .then(res => res.json())
            .then(dt => {
                let data = dt
                localStorage.setItem('data_number_box', JSON.stringify(data))
                setFindJournal(data)
                setNumberBox('')
                setImportANDparse(false)
                window.scrollTo(x, y);
            })
        }
    }

    return<>
    <main>
    <h2 className='title2__instruction'>Обратите внимание что пойск осуществляеться двумя способоми:</h2>
    <div className="container2">
    
        <div className='find__instruction'>

            <div className='start__instruction'><span style={{color: 'brown', fontSize: '30px'}}>По Журналам</span></div>
            <details className="acordion">   
                <summary>Инструкция</summary> 
                <ul>
                    <li>В поле "Имя журнала" укажите имя журнала в оригинале;</li>
                    <li>Убедитесь в том что имя напечатанно правильно;</li>
                    <li>Если вы знаете год выпуска журнала, укажите год в поле "Год", Это поле доступна только если вы указали название журнала.<br/>Это для того, чтобы сузить круг поиска;</li>
                    <li>Если вы хотите узнать количество журналов издание определенного выпуска укажите только год в поле "Год";</li>
                    <li>Если вы знаете номер выпуска журнала укажите его в поле "Издание". Это поле доступна только если вы указали название журнала.</li>
                </ul>
            </details>
            </div>
            <div className="container__upload">
                <form className="findf">
                    <div className="colum">
                        <label htmlFor="flag__name">Имя журнала</label>
                        <input type="text"
                        id="flag__name"
                        placeholder="Современная архитектура"
                        value={journalName}
                        onChange={e => {
                            setJournalName(e.target.value)}}/>
                        <label htmlFor="year">Год</label>
                        <input type="text"
                        id="year"
                        placeholder="1999"
                        value={year}
                        onChange={e => {
                            setYear(e.target.value)}}/>
                        <label htmlFor="edition">Издание</label>
                        <input type="text"
                        id="edition"
                        placeholder="060518"
                        value={numberEdition}
                        onChange={e => {
                            setNumberEdition(e.target.value)}}/>
                        <button className="button_banner" type='submit' onClick={sendToServer}>Поиск</button>
                    </div>
                    
                </form>
            <Loader flag={importANDparse}/>
            </div>
        </div>
        <div className="container2">
            <div className='find__instruction'>
                <div className='start__instruction'><span style={{color: 'brown', fontSize: '30px'}}>По коробкам</span></div>
                <details className="acordion">   
                    <summary>Инструкция</summary> 
                    <ul>
                        <li>Укажите номер коробки который вас интересует. Убедитесь в том что имя коробки указано правильно.</li>
                    </ul>
                </details>
                </div>
                <div className="container__upload">
                    <form className="findf">
                        <div className="colum">
                            <label htmlFor="flag__name">Номер коробки</label>
                            <input type="text"
                            id="flag__name"
                            placeholder="6952"
                            value={numberBox}
                            onChange={e => {
                                setNumberBox(e.target.value)}}/>
                            
                            <button className="button_banner" type='submit' onClick={sendToServerNumberBox}>Поиск</button>
                        </div>
                        
                    </form>
                    <Loader flag={importANDparse}/>
                </div>
            </div>
            {findJouranl.length > 0 ? <div className="card_result" ref={cardResult}>
                <div className="num_journal">Наидено {findJouranl.length} журналов с таким названием</div>
                <div className="centred">
                <div className="cards" style={cards}>
                    {findJouranl.map((elem,i) => <JournalCard
                    key={i}
                    id = {elem.id}
                    box_num={elem.num_box}
                    quantity = {elem.quantity}
                    name_journal = {elem.name_journal.length >= 20 ? elem.name_journal.slice(0, 20) + '...' : elem.name_journal}
                    />
                    )}
                </div>
            </div>
        </div>:
        <div className="card_result" ref={cardResult}>
             <div className="num_journal">Ничего не найдено, по данным запросом!</div>
        </div>}

        
    </main>
    </>
}

export default FindContainer