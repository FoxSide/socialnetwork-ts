import {MyPosts} from "../MyPosts";
import {AddPostAC, postPropsType, UpdateNewPostTextAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStatetype} from "../../../../redux/redux-store";
import {Dispatch} from "redux";

export type MapStatePropsType = {
  posts: Array<postPropsType>
  newPostText: string
}

export type MapDispatchPropsType = {
  updateNewPostText: (text: string) => void
  addPost: () => void
}

export type MyPostsPropType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStatetype): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updateNewPostText: (text: string) => {dispatch(UpdateNewPostTextAC(text))},
    addPost: () => {dispatch(AddPostAC())}
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)