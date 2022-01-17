import {connect} from "react-redux";
import {AppStatetype} from "../../redux/redux-store";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import Users from "./users";
import {
  followAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC, toggleIsFetchingAC,
  unFollowAC,
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
}
type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unFollow: (usersId: number) => void
  setUsers: (users: any) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUserCount: (totalUsersCount: number) => void
  toggleIsFetching: (status: boolean) => void
}

export class UsersAPIComponent extends React.Component<UserspropsType> {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalUserCount(response.data.totalCount)
    })
  }

  onPageChanged = (p: number) => {
    this.props.setCurrentPage(p)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             unFollow={this.props.unFollow}
             follow={this.props.follow}
      />
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
  }
}

export const UsersContainer = connect(mapStateToProps, {
  follow: followAC,
  unFollow:unFollowAC,
  setUsers:setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUserCount: setTotalCountAC,
  toggleIsFetching: toggleIsFetchingAC
})(UsersAPIComponent)