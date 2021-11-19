import React from 'react'

const Work = () => {
    return(
        <div id='work' className='w-screen min-h-80vh border-b border-t border-gray-700 ' data-scroll-section>
            <div className='md:w-3/4 h-80vh mx-auto flex flex-col md:flex-row md:border-l border-gray-700' >
                {/* <div className='md:w-2/4 md:border-r mb-12 border-gray-700'>
                    <h3 className=' md:min-w-min text-9xl anton'>selected works</h3>
                </div> */}
                <div className='min-w-1/4 md:writing-mode-vertical cursor-pointer'>
                    <div className='capitalize md:border-r border-gray-700 w-16 md:h-full text-3xl'>
                       <p className='mx-auto ml-4'> landerdot </p>
                    </div>
                    <div className='capitalize md:border-r border-gray-700 w-16 md:h-full text-3xl'>
                        <p className='mx-auto ml-4'>anylease</p>
                    </div>
                    <div className='capitalize md:border-r border-gray-700 w-16 md:h-full text-3xl'>
                        <p className='mx-auto ml-4'>employee management portal</p>
                    </div>
                    <div className='capitalize md:border-r border-gray-700 w-16 md:h-full text-3xl'>
                        <p className='my-auto ml-4'>dragnote</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work