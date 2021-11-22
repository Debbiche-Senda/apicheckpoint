import React from 'react'
import UseCard from './UseCard'

const UserList = ({users}) => {
    return (
        <div>
            {users.map(user=><UseCard user={user}/>)}
        </div>
    )
}

export default UserList
