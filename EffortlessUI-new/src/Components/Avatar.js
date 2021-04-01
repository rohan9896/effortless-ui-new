import React from 'react'
import './Heading.css'
import FaceAvatar from './FaceAvatar'
import AlphabetsAvatar from './AlphabetsAvatar'
import Description from './Description'

function Avatar() {
    return (
        <div>
            <h1 className='title'>Avatar</h1>
            <Description desc={'Avatars are icons that are used to represent circular user profile pictures.'} />
            <FaceAvatar />
            <AlphabetsAvatar />
        </div>
    )
}

export default Avatar
