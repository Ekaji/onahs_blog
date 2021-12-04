import React, { useState } from "react"
import { IsMenuOrNavbar } from "../../hooks/isNavBar/isNavBar"

const Menu = () => {
    const [menuState, setMenuState] = useState(true)
    const handleClick = () => setMenuState(!menuState)
    const menuOrNavbar = IsMenuOrNavbar()

    return(
        <>
            <div 
            className={` .blur-comp fixed right-0 w-screen anton z-20 
                            ${menuState ? ' transform transition-all ease-in duration-900 ' 
                            : 'transform transition-all ease-in duration-200 ' } 
                            `
                            } >
                <div className="flex justify-center items-center flex-col my-5 z-20" >
                    <div className="w-3/4 flex flex-col items-end md:flex-row md:justify-end">
                        
                    {menuOrNavbar === 'menu' ? 
                        <>
                            <div className="z-20 w-9 h-7 pointer overflow-hidden " >
                                <ul className="anton" >
                                    <li className={`transform transition-all ease-in duration-300 ${ menuState ? '-translate-y-7' : ''}`} onClick={handleClick}>
                                        <div className='  uppercase h-2/4 border-b-2 border-gray-900 mix-blend-difference text-black'> close </div>
                                    </li>
                                    <li className={`transform transition-all ease-in duration-300 ${ menuState ? '-translate-y-7' : ''}`} onClick={handleClick}>
                                        <div className='  uppercase h-2/4 border-b-2 border-gray-900 mix-blend-difference text-black '> menu </div>
                                    </li>
                                </ul>
                            </div>
                                
                            <div className={`bg-clip-padding backdrop-filter backdrop-blur-xl absolute right-0 w-screen ${menuState ? 'transform transition-all ease-in duration-500 -translate-y-110' : 'transform transition-all ease-in duration-1000 translate-y-0' } `} >
                                <div className='tracking-widest mx-auto pt-10 h-screen uppercase flex flex-col space-y-12 md:space-x-24 '>
                                    <button ><a className='tracking-widest capitalize'  href="#home" data-scroll-to onClick={handleClick}>home</a> </button>
                                    <button ><a className='tracking-widest capitalize' href="#about" data-scroll-to onClick={handleClick} >about</a> </button>
                                    <button ><a className='tracking-widest capitalize'  href="#projects" data-scroll-to onClick={handleClick} >projects</a> </button>
                                    <span className='mx-auto space-y-4 md:space-x-12'>
                                        <button className='tracking-widest block border-purple-700 border rounded-full w-40 py-2 hover:bg-purple-700 hover:text-white capitalize'><a href="/blog" >blog</a> </button>
                                        <button className='tracking-widest block bg-purple-700 rounded-full w-40 py-2 text-white hover:bg-white hover:text-purple-900 capitalize hover:border hover:border-purple-700'><a href="#">contact</a> </button>
                                    </span>
                                </div>
                            </div>
                        </>
                            : //desktop
                        <div className='tracking-widest md:flex md:space-x-24 md:uppercase'>
                            <button> <a className='tracking-widest capitalize' href="#home" data-scroll-to >home</a> </button>
                            <button> <a className='tracking-widest capitalize' href="#about" data-scroll-to >about</a> </button>
                            <button><a className='tracking-widest capitalize' href="#projects" data-scroll-to >projects</a> </button>
                            <span className='space-x-12'>
                                <button className='tracking-widest border-emerald-700 border rounded-full w-24 py-2 hover:bg-gray-900 hover:text-white capitalize'><a href="/blog"  >blog</a> </button>
                                <button className='tracking-widest bg-emerald-700 rounded-full w-24 py-2 text-white hover:bg-emerald-700 hover:text-gray-900  capitalize'><a href="#">contact</a> </button>
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