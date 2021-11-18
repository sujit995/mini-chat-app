import React from "react";
import { MyChatScreen } from "../../../components";

export default function ChatScreenMessages({ user, dp, message, timestamp }) {
  return (
    <MyChatScreen.Messages className="mb-3">
      <div className="message">
        <img src={dp} />
        <div className="message_info">
          <h4 className="username">{user}</h4>
          <div>
            <p className="badge bage-info messageText">{message}</p>
            <small className="time">
              <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
            </small>
          </div>
        </div>
      </div>
    </MyChatScreen.Messages>
  );
}
