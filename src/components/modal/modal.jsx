import React, { useState} from 'react'

 const Modal = ({ modalDetails, setModalVisibility}) => {
   console.log(modalDetails)

    return(
      <>
      <div className='z-closest blur-comp flex-col justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none .bg-indigo-100 '>
        <div className='w-4/5 inline-flex justify-end m-4'>
          <button type="button"
                  onClick={() => setModalVisibility(false)}
                  className="border border-indigo-700 rounded-full p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
          </button>
        </div>
        <div className=".w-11/12 md:w-10/12 m-auto z-50 .p-4">  
            <div className="-white shadow-md border border-gray-200 rounded-lg m-auto max-w-sm md:min-w-full md:flex ">
            <img className="rounded-t-lg md:w-3/4 " src={modalDetails.image} alt="" />
            <div className="p-5 ">
             <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{modalDetails.name}</h5>
             <p className="h-4/6 font-normal text-gray-700 mb-3 dark:text-gray-400">{modalDetails.description}</p>
             <a href={modalDetails.link}
                target='blank' 
                className="justify-self-end text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center cursor-pointer">
                    more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
            </div> 
        </div>
      </div>
      </>
    )
}

export default Modal