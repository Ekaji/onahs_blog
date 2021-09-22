import React, { useState } from "react"
import '../../styles/menu_styles_animations.css'

const Menu = () => {
    const [menuState, setMenuState] = useState(true)
    const handleClick = () => {
        setMenuState(!menuState)
    }

    return(
        <div className="flex justify-center items-center flex-col my-5 ">
            <div className="w-3/4 flex justify-end">
                <div className="w-9 h-6 overflow-hidden " >
                    <ul className="anton" >
                        <li className={` transform transition-all ease-in duration-300 ${ menuState ? '' : '-translate-y-6'}`} onClick={handleClick}>
                            <a href="#" className='text-stroke uppercase h-2/4'> menu </a>
                        </li>
                        <li className={` transform transition-all ease-in duration-300 ${ menuState ? '' : '-translate-y-6'}`} onClick={handleClick}>
                            <a href="#" className='text-stroke uppercase h-2/4'> close </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu