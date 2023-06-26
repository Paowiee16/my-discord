import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../../config/firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import SendMessage from "./SendMessage";
import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function Chat() {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  console.log(auth.currentUser);

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

  const messageEndRef = useRef();

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="m-auto chat ">
      <div className=" gap-4 h-5/6  overflow-x-hidden text-left overflow-hidden ">
        {messages.map((message) => (
          <div key={message.id} className="p-5">
            {message.displayName != auth.currentUser.displayName ? (
              <div className=" self-end">
                <span className=" flex gap-4 rounded-full ">
                  <img
                    src={message.photoURL}
                    className="rounded-full h-12 w-12  shadow-lg"
                  />
                  <span className="flex justify-center items-center gap-4">
                    <p className=" text-yellow-500">{message.displayName} </p>
                    <p className=" text-xs text-gray-500 content-center">
                      {moment(
                        message.createdAt?.toDate().toString()
                      ).calendar()}
                    </p>
                  </span>
                </span>

                <p className=" ml-16">{message.message}</p>
              </div>
            ) : (
              <div className="   items-end ">
                <span className=" flex justify-end gap-4 rounded-full ">
                  <span className="flex justify-center items-center gap-4">
                    <p className=" text-yellow-500">{message.displayName} </p>
                    <p className=" text-xs text-gray-500 content-center">
                      {moment(
                        message.createdAt?.toDate().toString()
                      ).calendar()}
                    </p>
                  </span>
                  <img
                    src={message.photoURL}
                    className="rounded-full h-12 w-12  shadow-lg "
                  />
                </span>

                <p className=" float-right mr-16">{message.message}</p>
              </div>
            )}
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
