import React, { useState} from 'react'

 const Modal = ({ modalDetails, setModalVisibility}) => {

    return(
      <>
      <div className='z-closest blur-comp flex-col justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none .bg-purple-100 '>
        <div className='w-4/5 inline-flex justify-end m-4'>
          <button type="button"
                  onClick={() => setModalVisibility(false)}
                  class="border border-purple-700 rounded-full p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
          </button>
        </div>
        <div className="w-4/5  m-auto z-50 ">  
            <div className="-white shadow-md border border-gray-200 rounded-lg m-auto max-w-sm md:max-w-screen-sm md:max-h-screen-sm md:flex ">
                <a href="#">
                    <img className="rounded-t-lg" src={modalDetails.image} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{modalDetails.name}</h5>
                    </a>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{modalDetails.description}</p>
                    <a href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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