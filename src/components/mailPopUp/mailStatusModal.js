import React from 'react';

const MailStatusModal = ({ mailStatusMessage, setMailPopUp }) => {

    return(
        <div className='z-closest blur-comp flex-col justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none '>
            <div className='w-full m-2 p-4 flex-col justify-center items-center flex border border-indigo-600 rounded-lg md:w-1/4 '>
                <div className='text-black text-2xl capitalize'> { mailStatusMessage } </div>
                    <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-2/4 focus:outline-none focus:shadow-outline" 
                                    onClick={ () => setMailPopUp(false) } >
                                close
                    </button>
            </div>
        </div>  

    )
}

export default MailStatusModal