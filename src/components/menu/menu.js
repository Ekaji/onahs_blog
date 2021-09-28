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
                <div className="w-9 h-7 overflow-hidden md:hidden" >
                    <ul className="anton " >
                        <li className={`  transform transition-all ease-in duration-300 ${ menuState ? '' : '-translate-y-7'}`} onClick={handleClick}>
                            <a href="#" className='text-stroke uppercase h-2/4 border-b-2 border-gray-900'> menu </a>
                        </li>
                        <li className={` transform transition-all ease-in duration-300 ${ menuState ? '' : '-translate-y-7'}`} onClick={handleClick}>
                            <a href="#" className='text-stroke uppercase h-2/4 border-b-2 border-gray-900'> close </a>
                        </li>
                    </ul>
                </div>
                <div className='hidden md:flex space-x-24 uppercase '>
                    <button> <a href="#">home</a> </button>
                    <button><a href="#">projects</a> </button>
                    <span className='space-x-12'>
                        <button className='border-gray-900 border rounded-full w-24 py-2 hover:bg-gray-900 hover:text-white'><a href="#">blog</a> </button>
                        <button className='bg-gray-900 rounded-full w-24 py-2 text-white hover:bg-white hover:text-gray-900 border hover:border-gray-900'><a href="#">contact</a> </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Menu