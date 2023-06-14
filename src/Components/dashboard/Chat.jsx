import React, { useState, useEffect } from "react";
import { db, auth } from "../../config/firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import SendMessage from "./SendMessage";

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

  return (
    <>
      <div className=" flex flex-col items-end justify-end gap-4  w-screen ">
        Chat:
        {messages.map((message) => (
          <div
            key={message.id}
            className="  py-3 px-4 bg-slate-600 rounded-lg  "
          >
            <p>{message.message}</p>
          </div>
        ))}
        <SendMessage />
      </div>
    </>
  );
}

export default Chat;
