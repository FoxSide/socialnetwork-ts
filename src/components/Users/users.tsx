import React from 'react';
import {UserspropsType} from "./usersContainer";
import s from './users.module.css'
import axios from "axios";
import userPhoto from './../../images/user.png'

export const Users = (props: UserspropsType) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        debugger;
        props.setUsers(response.data.items)
      })
    }
  }
  return (
    <div>
      <button onClick={getUsers}>GetUsers</button>
      {props.users.map(u => <div key={u.id}>
        <div>
          <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="ava" className={s.photo}/>
        </div>
        <div>
          {u.followed
            ? <button onClick={() => {
              props.unFollow(u.id)
            }}>Unfollow</button>
            : <button onClick={() => {
              props.follow(u.id)
            }}>Follow</button>}
        </div>
        <div>
          <div>{u.name}</div>
        </div>
      </div>)}
    </div>
  );
};