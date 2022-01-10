import {Users} from "./usersC";
import {connect} from "react-redux";
import {AppStatetype} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";

export type UserspropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
  users: Array<UsersType>
}
type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unFollow: (usersId: number) => void
  setUsers: (users: any) => void
}

const mapStateToProps = (state: AppStatetype): MapStateToPropsType => {
  return {
    users: state.usersPage.users
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unFollow: (userId: number) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users: Array<UsersType>) => {
      dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)