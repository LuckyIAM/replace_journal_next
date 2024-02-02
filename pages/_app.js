import React, {useState} from 'react'
import AppContext from '@/Context/AppContext'
import Modal from '@/components/Modal/index'
import './globals.css'

export default function App({ Component, pageProps }) {
    const [token, setToken] = useState(null)
    const [path, setPath] = useState('http://192.168.1.238:81')
    const [popupActiv, changePopupActiv] = useState(false)
    const [name, setName] = useState()//(localStorage.getItem('user')? localStorage.getItem('user') : '')
    const [flagReg, setFlagReg] = useState(false)
    const [roleSave, setRoleSave] = useState(null)//(localStorage.getItem('role')? localStorage.getItem('role') : '')
    const [inportORparse, setImportORparse] = useState('')
    const [importANDparse, setImportANDparse] = useState(false)
    const [findJournals, setFindJournals] = useState([])//(localStorage.getItem('journals') ? JSON.parse(localStorage.getItem('journals')) : '')
    const [findJouranl, setFindJournal] = useState([])//(localStorage.getItem('find_journal') ? JSON.parse(localStorage.getItem('find_journal')) : [])
    const [heightBox, setHeightBox] =useState('0px')
    const [boxId, setBoxId] = useState()//(localStorage.getItem('box_id') ? localStorage.getItem('box_id') : '')
    const [infoBox, setInfoBox] = useState()//(JSON.parse(localStorage.getItem('info_box')) || {})
    const [text, setText] = useState('')
    const [nameJournal, setNameJournal] =useState()//(localStorage.getItem('name_journal') ? localStorage.getItem('name_journal') : "")
    const [year, setYear] = useState('')
    const [showComponent, setShowComponent] = useState(false)
    return (
      <AppContext.Provider value = {{
        path: path, 
        setPath: setPath,
        token: token,
        setToken: setToken,
        popupActiv: popupActiv,
        changePopupActiv: changePopupActiv,
        name:name,
        setName: setName,
        flagReg,
        setFlagReg,
        roleSave: roleSave,
        setRoleSave: setRoleSave,
        inportORparse: inportORparse,
        setImportORparse: setImportORparse,
        importANDparse: importANDparse,
        setImportANDparse:setImportANDparse,
        findJournals: findJournals,
        setFindJournals: setFindJournals,
        heightBox: heightBox,
        setHeightBox: setHeightBox,
        boxId: boxId, 
        setBoxId: setBoxId,
        findJouranl: findJouranl,
        setFindJournal: setFindJournal,
        infoBox: infoBox, 
        setInfoBox: setInfoBox,
        text: text, 
        setText: setText,
        nameJournal: nameJournal, 
        setNameJournal: setNameJournal,
        year:year, 
        setYear: setYear,
        showComponent: showComponent, 
        setShowComponent: setShowComponent
 
      }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    ) 
  }
