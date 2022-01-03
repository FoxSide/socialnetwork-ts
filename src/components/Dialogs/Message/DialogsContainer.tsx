import {Dialogs} from "../Dialogs";
import {AddMessageAC, InitialStatePropsType, UpdateNewMessageTextAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStatetype} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
  messagesPage: InitialStatePropsType
}

type MapDispatchPropsType = {
  addMessage: () => void
  onChangeHandler: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStatetype): MapStateToPropsType => {
  return {
    messagesPage: state.messagesPage
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addMessage: () => {
      dispatch(AddMessageAC())
    },
    onChangeHandler: (text: string) => {
      dispatch(UpdateNewMessageTextAC(text))
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)