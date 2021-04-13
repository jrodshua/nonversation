import React from "react";
import ChatIndex from "./Chat/index";
import "./App.css";

const App = () => {
  return (
    <div>
      <main>
        <div className="app-wrapper">
          <h1>Nonversation</h1>
          <p>quick chats, made simple</p>
          <ChatIndex />
        </div>
      </main>
    </div>
  );
};

export default App;
