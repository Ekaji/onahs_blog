import React, { useState } from 'react'
import Modal from '../modal/modal'
import { projects } from '../../data/data'


const Work = () => {


    const [isModalVisible, setModalVisibility] = useState(false);
    const [modalDetails, setModalDetails] = useState({})

    const handleModalVisibility = (name, description, image) => {
        setModalVisibility(!isModalVisible)
        setModalDetails({name: name, description : description, image: image, })
    }



    return(
        <div className='mb-20' data-scroll-section>
            {isModalVisible ? <Modal isModalVisible={isModalVisible} modalDetails={modalDetails} />  : <></>}
            <div id='work-section-header' className=' w-4/5 mx-auto uppercase' >

                <h3 className='text-2xl anton text-purple-700'>
                    selected work
                </h3>
            </div>
            <div id='work' className='w-4/5 mx-auto mt-8 border-t border-purple-700 ' >
                <div className=' mx-auto flex flex-col md:flex-row  border-purple-700 ' > 
                    <div className='w-full cursor-pointer'>
                        {projects.map(( { name, description, image}, i ) => ( 
                        <div key={name} className='capitalize border-b border-purple-700 text-lg'>
                            <div className=' py-6 md:px-4 anton'>
                                <span className='flex' onClick={ () => handleModalVisibility( name, description, image)} >
                                    <span className='p-6 h-6 w-6 mr-6 flex items-center justify-center rounded-full border border-purple-700 '>{i + 1}</span>
                                    <span className='my-auto' >{name}</span>  
                                </span>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Work