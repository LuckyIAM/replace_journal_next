import React, {useContext} from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import './style.css'

const JournalCard = ({box_num, quantity, name_journal, id}) => {
    const goTo = useNavigate()
    const {api, setBoxId, setInfoBox, nameJournal, year, setText} = useContext(Context)
  


    const getElement = e => {
        e.preventDefault()
        localStorage.setItem('box_id', e.currentTarget.dataset.id)
        setBoxId(e.currentTarget.dataset.id)

        api.findOne(e.currentTarget.dataset.id)
            .then(res => res.json())
            .then(result => {
                let data = result
                localStorage.setItem('info_box', JSON.stringify(data))
                setInfoBox(data)
                let changeData = ''
                if(nameJournal){
                    let reg = '' 
                    for(let i = 0; i < nameJournal.length; i++){
                        reg = reg + `[${nameJournal[i].toLowerCase()}${nameJournal[i].toUpperCase()}]{1,1}`
                    }
                    let regName = new RegExp(reg, 'g')
                    let regYear = new RegExp(year, "g")
                    if(nameJournal && changeData === ''){
                        changeData = data.name_journal.replace(regName, `<span class="biger">${nameJournal}</span>`)
                    }
                    if(changeData && year){
                        changeData = changeData.replace(regYear, `<span class="biger">${year}</span>`)
                    }
                    if(changeData === '' && year){
                        changeData = data.name_journal.replace(regYear, `<span class="biger">${year}</span>`)
                    }
                    setText(changeData)
                }else{
                    setText(data.name_journal)
                }         
            })
        goTo(`/box/${e.currentTarget.dataset.id}`)
    }



    return<>
    <div className="jornal_container" data-id = {id} onMouseDown={getElement} >
        <div className="journal_box">
            <div className="box_grid">
                <div className="num-box">
                    <div className="colum gap">
                        <div className="box_icon"></div>
                        <div className="box_bottom">Номер коробки:</div>
                    </div>
                    
                </div>
                <div className="box_text"> {box_num}</div>
                <div className="num-box">
                    <div> Количество журналов:</div>
                </div>
                <div className="quantity">{quantity}</div>
                <div className="num-box">
                    <div>Название журналов:</div>
                </div>
                <div className="nameJournal"> <span className="show-all-element" >{name_journal}</span></div>
            </div>
        </div>
    </div>
    </>
}

export default JournalCard