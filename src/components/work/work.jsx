import React from 'react'

const Work = () => {
    return(
        <div className='mb-20' data-scroll-section>
            <div id='work-section-header' className='w-4/5 mx-auto uppercase' >
                {/* <div className='text-4xl' >work work work work work work work work</div> */}

                <h3 className='text-2xl anton text-trueGray-700'>
                    selected work
                </h3>
            </div>
            <div id='work' className='w-4/5 mx-auto mt-8 border-t border-gray-700 ' >
                <div className=' mx-auto flex flex-col md:flex-row  border-gray-700 ' > 
                    <div className='w-full cursor-pointer'>
                        <div className='capitalize border-b  border-gray-700 text-2xl md:text-lg'>
                           <p className='py-2 md:px-4 anton'> landerdot </p>
                        </div>
                        <div className='capitalize border-b  border-gray-700 text-2xl md:text-lg'>
                            <p className='py-2 md:px-4 anton'>anylease</p>
                        </div>
                        <div className='capitalize border-b  border-gray-700 text-2xl md:text-lg'>
                            <p className='py-2 md:px-4 anton'>employee management portal</p>
                        </div>
                        <div className='capitalize border-b  border-gray-700 text-2xl md:text-lg'>
                            <p className='py-2 md:px-4 anton'>dragnote</p>
                        </div>
                        <div className='capitalize border-b border-gray-700 text-2xl md:text-lg'>
                            <p className='py-2 md:px-4 anton'>bookmark landing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Work