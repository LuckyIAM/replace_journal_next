import React, {useContext} from "react";
import {Context} from "../../App"
import './style.css'

const BoxInfo = () =>{
    const {infoBox, text} = useContext(Context)
    let saveText =text
    function createMarkup() {
        return {__html: saveText};
    }

    
return<>
{infoBox && <div className="choice_box">
    <div className="chose_title">
        Отображение Коробки <span className="choice_id_box">№ {infoBox.num_box}</span>
    </div>
    <div className="choice_container">

        <div className="choise_text">Собрали коробку</div>
        <div className="choise_data">{infoBox.collector}</div>


        <div className="choise_text">Количество журналов в коробке</div>
        <div className="choise_data">{infoBox.quantity}</div>


        <div className="choise_text">Название журнала</div>
        <div className="choise_data height1" dangerouslySetInnerHTML={createMarkup()}></div>
    
        
    </div>
</div>}
</>

}

export default BoxInfo