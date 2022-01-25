import React from "react";
import s from "./users.module.css";
import userPhoto from "../../images/user.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (p: number) => void
  users: Array<UsersType>
  unFollow: (usersId: number) => void
  follow: (userId: number) => void
}

const Users = (props: PropsType) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let allPages: Array<number> = []
  let showPages: Array<number> = []
  for (let i = 1; i <= pagesCount; i++) {
    allPages.push(i)
  }
  for (let i = 1; i <= 10; i++) {
    showPages.push(i)
  }

  return (
    <div>
      {showPages.map(p => <button onClick={() => props.onPageChanged(p)}
                                  className={props.currentPage === p ? s.selectPage : ''}
                                  disabled={props.currentPage === p}
      >{p}</button>)}
      {props.users.map(u => <div key={u.id} className={s.body}>
        <div className={s.logo}>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="ava" className={s.photo}/>
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                followAPI.setUnfollow(u.id).then(data => {
                  if (data.resultCode === 0) {
                    props.unFollow(u.id)
                  }
                })

              }}>Unfollow</button>
              : <button onClick={() => {
                followAPI.setFollow(u.id).then(data => {
                  if (data.resultCode === 0) {
                    props.follow(u.id)
                  }
                })
              }}>Follow</button>}
          </div>
        </div>
        <div className={s.content}>
          <div>Name: {u.name}</div>
        </div>
      </div>)}
    </div>
  )
}

export default Users;