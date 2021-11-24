import React from 'react'

const Work = () => {
    return(
        <div className='' data-scroll-section>
            <div id='work-section-header' >
                {/* <div className='text-4xl' >work work work work work work work work</div> */}
                <div></div>
            </div>
            <div id='work' className='w-4/5 mx-auto mt-14 md:min-h-80vh border-t border-b-0 md:border-b border-gray-700 ' >
                <div className='md:w-3/4 md:h-80vh mx-auto flex flex-col md:flex-row md:border-l border-gray-700 ' >
                    
                    <div className='min-w-1/4 md:writing-mode-vertical cursor-pointer'>
                        <div className='capitalize border-b md:border-b-0 md:border-r border-gray-700  md:h-full text-2xl md:text-3xl'>
                           <p className='py-2 md:px-4 anton'> landerdot </p>
                        </div>
                        <div className='capitalize border-b md:border-b-0 md:border-r border-gray-700  md:h-full text-2xl md:text-3xl'>
                            <p className='py-2 md:px-4 anton'>anylease</p>
                        </div>
                        <div className='capitalize border-b md:border-b-0 md:border-r border-gray-700  md:h-full text-2xl md:text-3xl'>
                            <p className='py-2 md:px-4 anton'>employee management portal</p>
                        </div>
                        <div className='capitalize border-b md:border-b-0 md:border-r border-gray-700  md:h-full text-2xl md:text-3xl'>
                            <p className='py-2 md:px-4 anton'>dragnote</p>
                        </div>
                        <div className='capitalize border-b md:border-b-0 md:border-r border-gray-700 md:h-full text-2xl md:text-3xl'>
                            <p className='py-2 md:px-4 anton'>bookmark landing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Work