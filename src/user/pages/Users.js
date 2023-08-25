import React from 'react'
import UserList from '../components/UserList'
const Users = () => {
  const USERS = [
    {
      id:'u1',
      name:'John',
      image:'https://media.istockphoto.com/id/1460853312/photo/abstract-connected-dots-and-lines-concept-of-ai-technology-motion-of-digital-data-flow.jpg?s=1024x1024&w=is&k=20&c=rj1oW91QLNTYR5XvkkGdzz3-M-AyWOzVW4xaW1-soDM=',
      placeCount:3
    }
  ];
  return (
    <UserList item={USERS}/>
  )
}

export default Users