import React from "react";
import { useBeforeUnload } from "react-router-dom";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import BoxInfo from "../components/BoxInfo"
import Footer from "../components/Footer";


const BoxInformation = () => {
    let dataReload = `${window.location.href.split('/')[0]}//${window.location.href.split('/')[2]}/`

    useBeforeUnload(() => {
        window.location.href = dataReload
        localStorage.setItem('page_reload', dataReload)
    }, [])

    return<>
    <Menu/>
    <Banner/>
    <BoxInfo/>
    <div className="toppadiing" style={{position: 'relative', top: '50px'}}>
        <Footer/>
    </div>
    </>

}

export default BoxInformation