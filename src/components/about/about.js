import React from "react"

const About = () => {

    const stacks = ['html', 'css', 'javascript', 'nodejs', 'react', 'react native', 'mongoDb', 'express', 'jquery']

    return(
        <div>
            <div id="about" className='
             mt-14 md:h-70vh md:mb-44 w-4/5 mx-auto md:flex justify-end mb-12' data-scroll-section >
                <div className='md:w-2/4'>
                    <h3 className='text-2xl md:text-5xl  ml-2 tracking-tight anton uppercase text-trueGray-700' >who am i</h3>
                    <p className='max-mobile md:min-w-full text-1xl md:text-3xl ml-2 tracking-wide anton pt-4 ' 
                    // data-scroll data-scroll-speed='4'
                    >
                        i am a frontend focused web/software developer, i love to solve real life problems using clean and scalable solutions.
                    </p>
                </div>
            </div>
            <div id='stack' className=' w-full' data-scroll-section>
                <div className='w-4/5 mx-auto'>
                    <h3 className='text-2xl anton uppercase text-trueGray-700'>my stack</h3>
                    <div className='pt-4'>
                        {stacks.map((stack, i) => (
                        <div key={i} 
                             className='border rounded-3xl border-trueGray-700 px-6 py-1 text-base md:text-lg 
                                        anton tracking-wide my-1 mr-2 inline-block '>
                            {stack}
                        </div>) 
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About; 