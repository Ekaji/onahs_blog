import React from 'react';
import { IsMobileOrDesktop } from '../../hooks/deviceType/IsMobileOrDesktop'
import anyleaseDesktop from '../../images/desktop/anyleaseDesktop.png'
import anyleaseMobile from '../../images/mobile/anyleaseMobile.png'
import landerdotDesktop from '../../images/desktop/landerdotDesktop.png'
import landerdotMobile from '../../images/mobile/landerdotMobile.png'


const Projects = () => {
    return(
        <div className=" anton flex flex-col items-center" id="projects" data-scroll-section>
            <div className="w-full" >
                <h2 className="w-3/4 mx-auto flex flex-col uppercase anton text-4xl mb-10" 
                    data-scroll data-scroll-sticky data-scroll-repeat data-scroll-target="#projects" data-scroll-offset='-90, 120' >projects</h2>
            </div>
            <div className="anton container px-5 pb-10 mx-auto max-w-7x1 -m-4 ">
                <main className="h-full 
                      scrollBarContainer animate space-y-8"
                      >
                    <section className="w-full h-screen text-gray-600 body-font " >
                        <img 
                        src={IsMobileOrDesktop(anyleaseDesktop, anyleaseMobile)} 
                        alt="anylease" 
                        className="w-screen h-full " />
                        {/* <div className='relative h-full img-blur inset-0'></div> */}
                    </section>
                    <section className="w-full h-screen text-gray-600 body-font ">
                        <img 
                        src={IsMobileOrDesktop(landerdotDesktop, landerdotMobile)} 
                        alt="landerdot" 
                        className="w-screen h-full "/>
                    </section>
                    <section className="w-full h-screen bg-blue-200 img-blur">
                        Section 2
                    </section>
                </main>  
            </div>
        </div>
    )
}

export default Projects