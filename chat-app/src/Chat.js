import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <>
      <div className="bg-white w-full flex justify-center">
        <div className="flex bg-chat-background rounded-lg border-2 flex flex-col h-full max-w-8/12 w-8/12">
          <div className="font-inter p-4 font-bold text-2xl">Live Chat</div>
          <div className="">
            {/* chat-window */}
            <div className="overflow-y-auto max-h-96 h-96 bg-chat-background">
              {/* chat-body */}
              <ScrollToBottom className="h-full bg-chat-background">
                {messageList.map((messageContent) => {
                  return (
                    <div
                      className="p-2 bg-chat-background"
                    >
                      <div className="flex flex-col bg-chat-background w-full font-normal">
                        <div className={`font-inter p-4 text-sm w-fit 
                        ${username === messageContent.author ? 
                        'bg-white text-grey-color rounded-tl-15 rounded-bl-15 rounded-tr-15 justify-end self-end' : 
                        'bg-blue-color text-white rounded-tl-15 rounded-br-15 rounded-tr-15 self-start'}`}>
                          <div>{messageContent.message}</div>
                        </div>
                        <div className={`text-11 font-inter flex flex-row
                        ${username === messageContent.author ? 'self-end' : 'self-start'}
                        `}>
                          <div className='flex pr-2' id="time">{messageContent.time}</div>
                          <div className='flex' id="author">{messageContent.author}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ScrollToBottom>
            </div>
            <div className="w-full flex flex-row h-12">
              {/* chat-footer */}
              <input
                type="text"
                value={currentMessage}
                placeholder="Hey..."
                onChange={(event) => {
                  setCurrentMessage(event.target.value);
                }}
                onKeyPress={(event) => {
                  event.key === "Enter" && sendMessage();
                }}
                className="w-11/12 p-2 flex"
              />
              <button onClick={sendMessage} className="w-1/12 bg-white flex justify-around">
                <img src="sent-icon.png" className="h-12"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
