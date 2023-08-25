import React from 'react'
import UserItem from './UserItem';
import "./UserList.css";
const UserList = (props) => {
    if(props.item.length === 0){
        return (
            <div className='center'>
              <h2>No Users Found</h2>
            </div>
        )
    }
    return(
       <ul>
        {props.item.map((user) => {
            return <UserItem 
                key={user.id}
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.placeCount}
            />
        })}
       </ul>
    )
}

export default UserList