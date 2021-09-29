import React, { useState, useEffect } from "react"
import '../../styles/menu_styles_animations.css'
import { IsMobileOrDesktop } from "../../hooks/deviceType/IsMobileOrDesktop"

const Menu = () => {
    const [menuState, setMenuState] = useState(true)
    const handleClick = () => {
        setMenuState(!menuState)
    }


    const deviceType = IsMobileOrDesktop('desktop', 'mobile')


    return(
        <div className="flex justify-center items-center flex-col my-5 ">
            <div className="w-3/4 flex flex-col items-end md:flex-row md:justify-end">
                <div className="z-20 w-9 h-7 overflow-hidden md:hidden" >
                    <ul className="anton" >
                        <li className={`  transform transition-all ease-in duration-300 ${ menuState ? '-translate-y-7' : ''}`} onClick={handleClick}>
                            <a href="#" className='text-stroke uppercase h-2/4 border-b-2 border-gray-900'> close </a>
                        </li>
                        <li className={` transform transition-all ease-in duration-300 ${ menuState ? '-translate-y-7' : ''}`} onClick={handleClick}>
                            <a href="#" className='text-stroke uppercase h-2/4 border-b-2 border-gray-900'> menu </a>
                        </li>
                    </ul>
                </div>
                {deviceType === 'mobile' ? 
                <div className={`transform transition-all ease-in duration-300 absolute bg-white right-0 w-screen ${menuState ? '-translate-y-110' : '' } md:translate-y-110`}>
                    <div className='mx-auto mt-10 uppercase flex flex-col space-y-12 md:space-x-24'>
                        <button className='uppercase'><a href="#">home</a> </button>
                        <button className='uppercase'><a href="#">projects</a> </button>
                        <span className='mx-auto space-y-4 md:space-x-12'>
                            <button className='block border-gray-900 border rounded-full w-24 py-2 hover:bg-gray-900 hover:text-white'><a href="#">blog</a> </button>
                            <button className='block bg-gray-900 rounded-full w-24 py-2 text-white hover:bg-white hover:text-gray-900 border hover:border-gray-900'><a href="#">contact</a> </button>
                        </span>
                    </div>
                </div>
                 :
                <div className='hidden md:flex md:space-x-24 md:uppercase '>
                    <button> <a href="#">home</a> </button>
                    <button><a href="#">projects</a> </button>
                    <span className='space-x-12'>
                        <button className='border-gray-900 border rounded-full w-24 py-2 hover:bg-gray-900 hover:text-white'><a href="#">blog</a> </button>
                        <button className='bg-gray-900 rounded-full w-24 py-2 text-white hover:bg-white hover:text-gray-900 border hover:border-gray-900'><a href="#">contact</a> </button>
                    </span>
                </div> 
              }            
            </div>
        </div> 
    )
}

export default Menu