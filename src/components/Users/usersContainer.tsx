import {connect} from "react-redux";
import {AppStatetype} from "../../redux/redux-store";
import React from "react";
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
import {userAPI} from "../../api/api";

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
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
      this.props.setTotalUserCount(data.totalCount)
    })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
    })
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
               unFollow={this.props.unFollow}
               follow={this.props.follow}
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
  }
}

export const UsersContainer = connect(mapStateToProps, {
  follow: followAC,
  unFollow: unFollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUserCount: setTotalCountAC,
  toggleIsFetching: toggleIsFetchingAC
})(UsersAPIComponent)