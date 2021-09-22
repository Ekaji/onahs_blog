import React from "react"
import '../styles/global.css'

const Layout = ({children}) => {
    return(
        <div className="w-full flex flex-col justify-center align-center">
                { children }
        </div>
    )
}

export default Layout;