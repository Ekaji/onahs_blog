import React from "react"
import '../styles/locomotivescroll.css'
import '../styles/global.css'
import Locomotive from './scroll/Locomotive'
import Menu from '../components/menu/menu'

const Layout = ({children}) => {

    return(
        <>
        {/* <Menu /> */}
        <Locomotive>
<div className="w-full flex flex-col justify-center align-center bg-trueGray-300 z-50 overflow-hidden" >

            { children }
            </div>
        </Locomotive>
        </>
    )
}

export default Layout;