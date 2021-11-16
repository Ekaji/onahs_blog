import React from 'react';
import { IsMobileOrDesktop } from '../../hooks/deviceType/IsMobileOrDesktop'
import anyleaseDesktop from '../../images/desktop/anyleaseDesktop.png'
import anyleaseMobile from '../../images/mobile/anyleaseMobile.png'


const Projects = () => {
    return(
        <div className=" anton flex flex-col items-center" id="projects">
            <div className="anton container px-5 pt-24 pb-10 mx-auto max-w-7x1 -m-4 ">
                <div data-scroll data-scroll-sticky data-scroll-target="#projects">
                    <h2 className="w-3/4 mx-auto flex flex-col uppercase anton text-4xl" data-scroll >projects</h2>
                </div>
                <main className="">
                    <section className="text-gray-600 body-font m-6  " >
                        <img src={IsMobileOrDesktop(anyleaseDesktop, anyleaseMobile)} alt="anylease" />
                    </section>
                    <section class="w-full h-screen bg-red-200  ">
                        Section 1
                    </section>
                    <section class="w-full h-screen bg-blue-200  ">
                        Section 2
                    </section>
                    <section class="w-full h-screen bg-green-200  ">
                        Section 3
                    </section>
                    <section class="w-full h-screen bg-indigo-200  ">
                        Section 4
                    </section>
                    <section class="w-full h-screen bg-yellow-200  " >
                        Section 5
                    </section>
                </main>  
            </div>
        </div>
    )
}

export default Projects