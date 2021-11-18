import React, { useState } from "react";
import { MyForm } from "../../../components";
import { IoIosPaperPlane } from "react-icons/io";
import UserAuthListener from '../../../hooks/use-auth-listener';
import { db } from '../../../lib/firebase';
import firebase from 'firebase';


export default function ChatForm() {
  const [message, setMessage] = useState();
  const user = UserAuthListener();

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("room")
      .add({
        user: user.displayName,
        userImage: user.photoURL,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .catch((error) => alert(error))
    setMessage("")
  }

  return (
    <MyForm>
      <MyForm.FormGroup className="form-group formInput__group">
        <MyForm.FormInput
          className="form-control forminput"
          placeholder="Type Message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <MyForm.FormButton
          className="btn btn-success submitButton" onClick={sendMessage}
        >
          <IoIosPaperPlane />
        </MyForm.FormButton>
      </MyForm.FormGroup>
    </MyForm>
  );
}
