import React from 'react'
import './Description.css'

function Description( props ) {
    return (
        <div className='description'>
            <p>{props.desc}</p>
        </div>
    )
}

export default Description
