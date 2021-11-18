import React from "react"
import frontend from "../../images/frontend.gif"


const About = () => {
    return(
        <div id="about" className='h-screen md:h-4/5 md:mb-44 flex anton mb-14 w-3/4 mx-auto space-x-2 ' data-scroll-section >
            <h3 className='text-7xl my-auto md:text-9xl text-trueGray-500 tracking-tight' >who am i</h3>
            <p className='text-2xl my-auto md:text-3xl tracking-wider uppercase md:w-2/4' data-scroll data-scroll-speed='5'>
                i am a frontend focused web/software developer, i love to solve real life problems using clean and scalable solutions.
            </p>
        </div>
    )
}

export default About; 