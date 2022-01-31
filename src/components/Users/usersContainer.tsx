import {connect} from "react-redux";
import {AppStatetype} from "../../redux/redux-store";
import React from "react";
import Users from "./users";
import {
  followThunkCreator,
  getUsersThunkCreator,
  setCurrentPageAC,
  toggleIsFollowingAC,
  unFollowThunkCreator,
  UsersType
} from "../../redux/users-reducer";
import {Preloader} from "../Common/preloader";

export type UserspropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}
type MapDispatchToPropsType = {
  setCurrentPage: (currentPage: number) => void
  toggleIsFollowing: (isFetching: boolean, userId: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
  followThunk: (userId: number) => void
  unFollowThunk: (userId: number) => void
}

export class UsersAPIComponent extends React.Component<UserspropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFetching ?
        <Preloader/> :
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               followingInProgress={this.props.followingInProgress}
               followThunk={this.props.followThunk}
               unFollowThunk={this.props.unFollowThunk}
        />}

    </>
  }
}

const mapStateToProps = (state: AppStatetype): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export const UsersContainer = connect(mapStateToProps, {
  setCurrentPage: setCurrentPageAC,
  toggleIsFollowing: toggleIsFollowingAC,
  getUsers: getUsersThunkCreator,
  followThunk: followThunkCreator,
  unFollowThunk: unFollowThunkCreator
})(UsersAPIComponent)