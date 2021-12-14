import React, { useState, useEffect, useRef, createRef } from 'react'
import Modal from '../modal/modal'
import { projects } from '../../data/data'
import ScrollReveal from 'scrollreveal'


const Work = () => {


    const [isModalVisible, setModalVisibility] = useState(false);
    const [modalDetails, setModalDetails] = useState({});

    const handleModalVisibility = (name, description, image, link) => {
        setModalVisibility(!isModalVisible)
        setModalDetails({ name: name, description : description, image: image, link: link })
    }

    const scrollRef = useRef([])

    
    useEffect(() => {
        ScrollReveal({ reset: true })
        .reveal(scrollRef.current, {
            delay: 800,
            duration: 1000,
            reset: true
        })
    },[])
    

    return(
        <div id="projects" className='mb-20' data-scroll-section >
            {isModalVisible ? <Modal setModalVisibility={setModalVisibility} modalDetails={modalDetails} />  : <></>}
            <div id='work-section-header' className=' w-4/5 mx-auto .uppercase' >

                <h3 className='text-2xl .anton text-indigo-700'>
                    Selected work
                </h3>
            </div>
            <div id='work' className='w-4/5 mx-auto mt-8 border-t border-indigo-700 ' >
                <div className=' mx-auto flex flex-col md:flex-row  border-indigo-700 ' > 
                    <div className='w-full cursor-pointer' >
                        {projects.map(( { name, description, image, link }, i ) => ( 
                        <div key={name} 
                            ref={(element) => { 
                                scrollRef.current[i] = element
                                return element
                            } }
                            className='capitalize border-b border-indigo-700 text-lg'
                            onClick={ () => handleModalVisibility( name, description, image, link)}>
                            <div className=' py-6 md:px-4' >
                                <span className='flex'  >
                                    <span className='p-6 h-6 w-6 mr-6 flex items-center justify-center rounded-full border border-indigo-700 '>{i + 1}</span>
                                    <span className='my-auto ' >{name}</span>  
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