import React from 'react'

const Emoji = ( props ) => { 

    return(
        <span
         className='emoji'
         role='img'
         aria-label={props.label ? props.label : ''}
         aria-hidden={ props.hidden ? props.hidden : ''}
        >
            { props.symbol }
        </span>
    )
}

export default Emoji;