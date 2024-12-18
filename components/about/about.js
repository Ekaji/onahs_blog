
import React from "react"

const About = () => {

const stacks = [
    'html',
    'css',
    'javascript',
    'PHP',
    'wordpress',
    'jquery',
    'nodejs',
    'react',
    'Nextjs',
    'Supabase',
    'firebase',
    'gatsbyJS',
    'react native',
    'mongoDb',
    'express',
    'tailwind'
]


    return(
        <div>
            <div id="about" className='
             mt-14 w-4/5 mx-auto md:flex mb-20 ' data-scroll-section >
                <div className='md:w-2/4'>
                    <h3 className='text-2xl  ml-2 tracking-tight .anton .uppercase text-indigo-700' >Who am i?</h3>
                    <p className='max-mobile md:min-w-full text-base md:text-lg ml-2 tracking-wide .anton pt-4 ' 
                    // data-scroll data-scroll-speed='4'
                    >
                        I am a frontend focused web/software developer, i love to solve real life problems using clean and scalable solutions.
                    </p>
                </div>
            </div>
            <div id='stack' className=' w-full mb-20' data-scroll-section>
                <div className='w-4/5 mx-auto'>
                    <h3 className='text-2xl .anton .uppercase text-indigo-700'>My stack</h3>
                    <div className='pt-4'>
                        {stacks.map((stack, i) => (
                        <div key={i} 
                             className='border rounded-3xl border-indigo-700 .bg-indigo-300 px-6 py-1 text-base md:text-lg 
                                        .anton tracking-wide my-1 mr-1 inline-block '>
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
