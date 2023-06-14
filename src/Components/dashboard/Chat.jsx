import React, { useState, useEffect } from "react";
import { db, auth } from "../../config/firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import SendMessage from "./SendMessage";
import moment from "moment";

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    //connects to DB and list the chats based on time created.
    const q = query(collection(db, "chat"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  console.log(messages);
  return (
    <div>
      <div className="  items-end  gap-4  w-screen  h-5/6   overflow-scroll text-left">
        {messages.map((message) => (
          <div key={message.id} className="p-5">
            <span className=" flex gap-4 rounded-full  text-gray-600">
              <img
                src={message.photoURL}
                className="rounded-full h-12 w-12  shadow-lg"
              />
              <span className="flex justify-center items-center gap-4">
                <p className=" text-yellow-500">{message.displayName} </p>
                <p className=" text-xs text-gray-500 content-center">
                  {moment(message.createdAt?.toDate().toString()).calendar()}
                </p>
              </span>
            </span>
            <p className=" ml-16">{message.message}</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
