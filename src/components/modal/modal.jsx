import React, { useState} from 'react'

 const Modal = ({ modalDetails}) => {
     console.log(modalDetails)

    return(
      <div className='absolute'>
        <div>
            {modalDetails.name}
        </div>
        <div id='image'>
            <img src={modalDetails.image} className='' />
        </div>
        <div id='description'>
            {modalDetails.description}
        </div>
    
      </div>
    )
}

export default Modal