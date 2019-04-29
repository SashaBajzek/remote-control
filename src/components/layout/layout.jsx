import React from "react";
import Login from "./login/login";
import User from "./nav/user";
import Chat from "./chat/chat";

const Layout = ({ socket, chatroom, user, setUser }) => {
  return (
    <React.Fragment>
      {socket !== null ? (
        <React.Fragment>
          {!user ? (
            <Login socket={socket} setUser={setUser} />
          ) : (
            <React.Fragment>
              <User user={user} socket={socket} />
            </React.Fragment>
          )}
          <Chat socket={socket} user={user} chatroom={chatroom} />
        </React.Fragment>
      ) : (
        <div> Connection Offline </div>
      )}
    </React.Fragment>
  );
};

export default Layout;
