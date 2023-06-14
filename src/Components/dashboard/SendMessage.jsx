import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../../config/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { collection, doc, setDoc } from "firebase/firestore";
function SendMessage() {
  const [newMessage, setNewMessage] = useState("");
  const { uid, displayName, photoURL } = auth.currentUser;
  const bottomRef = useRef(null);
  const handleOnSubmit = async (e) => {
    const data = {
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      message: newMessage,
      uid,
      displayName,
      photoURL,
    };
    const newChat = doc(collection(db, "chat"));
    e.preventDefault();
    await setDoc(newChat, data);
    setNewMessage("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [newMessage]);

  const handleOnchange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <div className="flex flex-row mb-2">
      <form onSubmit={handleOnSubmit}>
        <input
          className=" bg-slate-600 rounded-s-2xl p-2 border-none outline-none appearance-none"
          onChange={handleOnchange}
          value={newMessage}
          placeholder="Type message here..."
        ></input>
        <button className="px-5 p-2 bg-slate-600 rounded-e-2xl  ">Send</button>
      </form>
    </div>
  );
}

export default SendMessage;
