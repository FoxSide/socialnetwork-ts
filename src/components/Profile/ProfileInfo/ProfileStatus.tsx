import React, {useState} from 'react';

const ProfileStatus = (props: any) => {
  const [state, setState] = useState({editMode: false})

  const onClickHandler = () => {
    setState({editMode: true})
  }
  const onBlurHandler = () => {
    setState({editMode: false})
  }

  return (
    <>
      {!state.editMode
        ? <div>
          <span onDoubleClick={onClickHandler}>{props.status}</span>
        </div>
        :
        <div>
          <input value={props.status} onBlur={onBlurHandler} autoFocus={true}/>
        </div>
      }
    </>
  );
};

export default ProfileStatus;