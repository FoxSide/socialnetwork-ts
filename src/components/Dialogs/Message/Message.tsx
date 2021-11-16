import React from "react";

type MessageItemPorpsType = {
  message: string
}

export const MessageItem = (props: MessageItemPorpsType) => {
  return (
    <div>{props.message}</div>
  )
}