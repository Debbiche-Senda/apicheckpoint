import React from 'react'
import './UseCard.css'

const UseCard = ({user}) => {
    return (
        <div className='usercard'>
            <h2>{user.name}</h2>
            <h2>{user.username}</h2>

            <button className='bttn'> CLICK</button>
        </div>
    )
}

export default UseCard
