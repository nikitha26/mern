import React from 'react'
import { Link } from 'react-router-dom';
import "./UserItem.css";
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';

const UserItem = (props) => {
  return (
    <li className='user-item'>
      <Card className='user-item__content'>
        <Link to={`/${props.id}/places`}>
          <div className='user-item__image'>
            <Avatar image={props.image} alt={props.name} />
            {/* <img src={props.image} alt={props.name}/> */}
          </div>
          <div className='user-item-info'>
            <h4>{props.name}</h4>
            <h5>{props.placeCount}
              {props.placeCount === 1 ? ' Place' : ' Places'}
            </h5>
          </div>
        </Link>
      </Card>  
    </li>
  )
}

export default UserItem