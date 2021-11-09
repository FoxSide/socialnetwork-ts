import React from "react";
import s from './Post.module.css'

type postPropsType = {
  message: string
  likescount: number
}

export const Post = (props:postPropsType) => {
  return (
    <div>
      <div className={s.item}><img
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWNvxqwJyqQtJQLKuWSGDQaxDG0JQ1LHbV_ffZ1qdFc85UtnfLu1D2IbsKPdIqnUtyE8&usqp=CAU'}
        alt={'ava'}/>
        {props.message}
        <div>
          <button>Like</button> {props.likescount}
        </div>
      </div>
    </div>
  )
}