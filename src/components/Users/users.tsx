import React from 'react';
import {UserspropsType} from "./usersContainer";
import s from './users.module.css'

export const Users = (props: UserspropsType) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png',
        followed: true,
        fullName: 'Eduard',
        status: 'I am a boss',
        location: {city: 'Kyiev', country: 'Ukraine'}
      },
      {
        id: 2,
        photoUrl: 'https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png',
        followed: true,
        fullName: 'Viktoria',
        status: 'Krasotka',
        location: {city: 'Kyiev', country: 'Ukraine'}
      },
      {
        id: 3,
        photoUrl: 'https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png',
        followed: true,
        fullName: 'Ned',
        status: 'Dilova kolbasa',
        location: {city: 'Kyiev', country: 'Ukraine'}
      },
      {
        id: 4,
        photoUrl: 'https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png',
        followed: true,
        fullName: 'Varova',
        status: 'Wife of dilova kolbasa',
        location: {city: 'Kyiev', country: 'Ukraine'}
      },
    ])
  }

  return (
    <div>
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} alt="ava" className={s.photo}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
              : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)}
    </div>
  );
};