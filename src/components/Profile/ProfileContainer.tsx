import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStatetype} from "../../redux/redux-store";
import {SetUserProfileAC} from "../../redux/profile-reducer";

type ProfilePropstype = MapStateToPropsType & MapDispatchToPropsType
type MapDispatchToPropsType = {
  setUserProfile: (profile: any) => void
}
type MapStateToPropsType = {
  profile: ProfileType
}
type ContactsType = {
  facebook: string,
  website: null,
  vk: string,
  twitter: string,
  instagram: string,
  youtube: null,
  github: string,
  mainLink: null
}
type PhotosType = {
  small: string
  large: string
}
export type ProfileType = {
  aboutMe: string
  contacts: ContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: PhotosType
} | null

class ProfileContainer extends React.Component<ProfilePropstype> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profile}/>
      </div>
    )
  }
}

let mapStateToProps = (state: AppStatetype): MapStateToPropsType => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile: SetUserProfileAC})(ProfileContainer)