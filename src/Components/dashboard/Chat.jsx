import React, { useState, useEffect } from "react";
import { db, auth } from "../../config/firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
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
    <div>
      Chat:
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Chat;
