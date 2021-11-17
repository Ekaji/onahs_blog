import React, { useState } from "react"
import { IsMobileOrDesktop } from "../../hooks/deviceType/IsMobileOrDesktop"

const Menu = () => {
    const [menuState, setMenuState] = useState(true)
    const handleClick = () => setMenuState(!menuState)
    const deviceType = IsMobileOrDesktop('desktop', 'mobile')

    return(
        <>
        <div className={`blur-comp fixed right-0 w-screen anton z-20 
                        ${menuState ? ' transform transition-all ease-in duration-900 ' 
                        : 'transform transition-all ease-in duration-200 ' } 
                         `
                        } >
            <div className="flex justify-center items-center flex-col my-5 z-20" >
                <div className="w-3/4 flex flex-col items-end md:flex-row md:justify-end">
                    <div className="z-20 w-9 h-7 pointer overflow-hidden md:hidden" >
                        <ul className="anton" >
                            <li className={`transform transition-all ease-in duration-300 ${ menuState ? '-translate-y-7' : ''}`} onClick={handleClick}>
                                <div className='text-stroke uppercase h-2/4 border-b-2 border-gray-900'> close </div>
                            </li>
                            <li className={`transform transition-all ease-in duration-300 ${ menuState ? '-translate-y-7' : ''}`} onClick={handleClick}>
                                <div className='text-stroke uppercase h-2/4 border-b-2 border-gray-900'> menu </div>
                            </li>
                        </ul>
                    </div>
                    {deviceType === 'mobile' ? 
                    //mobile
                    <div className={`bg-clip-padding backdrop-filter backdrop-blur-xl absolute right-0 w-screen ${menuState ? 'transform transition-all ease-in duration-500 -translate-y-110' : 'transform transition-all ease-in duration-1000 translate-y-0' } md:translate-y-110`} >
                        <div className='tracking-widest mx-auto pt-10 h-screen uppercase flex flex-col space-y-12 md:space-x-24 '>
                            <button ><a className='tracking-widest'  href="#home" data-scroll-to >home</a> </button>
                            <button ><a className='tracking-widest' href="#about" data-scroll-to >about</a> </button>
                            <button ><a className='tracking-widest'  href="#projects" data-scroll-to >projects</a> </button>
                            <span className='mx-auto space-y-4 md:space-x-12'>
                                <button className='tracking-widest block border-gray-900 border rounded-full w-40 py-2 hover:bg-gray-900 hover:text-white'><a href="/blog" data-scroll-to >blog</a> </button>
                                <button className='tracking-widest block bg-gray-900 rounded-full w-40 py-2 text-white hover:bg-white hover:text-gray-900 border hover:border-gray-900'><a href="#">contact</a> </button>
                            </span>
                        </div>
                    </div>
                    : //desktop
                    <div className='tracking-widest md:flex md:space-x-24 md:uppercase'>
                        <button> <a className='tracking-widest' href="#home" data-scroll-to >home</a> </button>
                        <button> <a className='tracking-widest' href="#about" data-scroll-to >about</a> </button>
                        <button><a className='tracking-widest' href="#projects" data-scroll-to >projects</a> </button>
                        <span className='space-x-12'>
                            <button className='tracking-widest border-gray-900 border rounded-full w-24 py-2 hover:bg-gray-900 hover:text-white'><a href="/blog" data-scroll-to >blog</a> </button>
                            <button className='tracking-widest bg-gray-900 rounded-full w-24 py-2 text-white hover:bg-white hover:text-gray-900 border hover:border-gray-900'><a href="#">contact</a> </button>
                        </span>
                    </div> 
                }            
                </div>
            </div> 
        </div>
        </>
    )
}

export default Menu