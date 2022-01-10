import React from "react";
import userPhoto from "../../images/user.png";
import s from "./users.module.css";
import axios from "axios";
import {UserspropsType} from "./usersContainer";

export class Users extends React.Component<UserspropsType> {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsers(response.data.items)
      })
    }
  }

  render() {
    return (
      <div>
        {this.props.users.map(u => <div key={u.id} className={s.body}>
          <div className={s.logo}>
            <div>
              <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="ava" className={s.photo}/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {
                  this.props.unFollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  this.props.follow(u.id)
                }}>Follow</button>}
            </div>
          </div>
          <div className={s.content}>
            <div>Name: {u.name}</div>
          </div>
        </div>)}
      </div>
    );
  }
}