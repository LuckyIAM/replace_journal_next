import React from "react"
import { useBeforeUnload } from "react-router-dom" 
import Banner from '../components/Banner/index'
import Menu from "../components/Menu"
import UploadContainer from "../components/UploadContainer/index"
import Footer from "../components/Footer"




const ImportFile = () => {
    let dataReload = `${window.location.href.split('/')[0]}//${window.location.href.split('/')[2]}/`

    useBeforeUnload(() => {
        window.location.href = dataReload
        localStorage.setItem('page_reload', dataReload)
    }, [])

    console.log(dataReload);

    return<>
    <Menu/>
    <main className="import_data__container">
        <Banner/>
        <UploadContainer/>
        <div className="toppadiing" style={{position: 'relative', top: '100px'}}>
        <Footer/>
        </div>
        
    </main>

    </>

}

export default ImportFile