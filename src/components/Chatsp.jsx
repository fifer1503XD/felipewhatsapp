import React, { useState } from "react";
import "../App.css";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";

function Chatsp() {
  
  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default Chatsp;
