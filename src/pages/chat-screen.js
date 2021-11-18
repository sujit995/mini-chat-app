import React, { useState, useEffect } from "react";
import "../styles/chat-screen.css";
import { MyChatScreen } from "../components";
import { ChatForm, ChatScreenMessages, Header } from "../containers";
import { db } from '../lib/firebase';


export default function ChatScreen() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("room").orderBy('timestamp', 'asc').onSnapshot((snapshot) => setMessages(snapshot.docs.map(message => ({
      id: message.id,
      user: message.data().user,
      userImage: message.data().userImage,
      timestamp: message.data().timestamp,
      message: message.data().message,
    }))
    )
    );
  }, [])
  return (
    <MyChatScreen>
      <MyChatScreen.Header>
        <Header />
      </MyChatScreen.Header>
      <MyChatScreen.Body>
        <div className="messages_body">
          {messages.length === 0 ? (
            <div className="chat-screen-text">
              <p>
                <span>No messages</span> are available
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div className="mb-4" key={message.id}>
                <ChatScreenMessages
                  timestamp={message.timestamp}
                  user={message.user}
                  dp={message.userImage}
                  message={message.message}
                />
              </div>
            ))
          )}
        </div>
        <div className="form-wrapper">
          <ChatForm />
        </div>
      </MyChatScreen.Body>
    </MyChatScreen>
  );
}
