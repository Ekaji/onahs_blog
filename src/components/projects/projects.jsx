import React from 'react';
import { IsMobileOrDesktop } from '../../hooks/deviceType/IsMobileOrDesktop'
import anyleaseDesktop from '../../images/desktop/anyleaseDesktop.png'
import anyleaseMobile from '../../images/mobile/anyleaseMobile.png'


const Projects = () => {
    return(
        <div className=" anton flex flex-col items-center">
        <div className="anton container px-5 py-24 mx-auto max-w-7x1 -m-4">
            <h2 className="w-3/4 mx-auto flex flex-col uppercase anton text-4xl">projects</h2>
            {/* <h2 className="w-3/4 flex flex-col uppercase text-4xl">projects</h2> */}
              <section className="text-gray-600 body-font m-6">
                  <img src={IsMobileOrDesktop(anyleaseDesktop, anyleaseMobile)} alt="anylease" />
              </section>
        </div>
        </div>
    )
}

export default Projects