import React from "react"
import '../styles/locomotivescroll.css'
import '../styles/global.css'
import Locomotive from './scroll/Locomotive'

const Layout = ({children}) => {

    return(
        // <Locomotive>
            <div className="w-full flex flex-col justify-center align-center bg-gray-200 z-50 overflow-hidden" >
            { children }
            </div>
        // </Locomotive>
    )
}

export default Layout;
