import React, {useContext} from "react";
import {Context} from '../../App'
import './style.css'

const Loader = () => {
    const {importANDparse} = useContext(Context)

    return  <div className={importANDparse ? "popup-box active" : "popup-box"}>
        <div className="load_box">
            <div className="loader"></div>
            <div className="loader_text">Идет обработка данных...</div>
        </div>
    </div>
}

export default Loader