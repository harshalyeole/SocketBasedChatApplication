// import "./App.css";
import "./style.scss";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
      <div className="bg-home-background rounded-50 p-20">
        <div className="flex flex-row font-poppins text-white">
          <div className="flex flex-col bg-dark-blue py-24 px-14 text-sm font-normal rounded-tl-50 rounded-bl-50 justify-center">
            <div className="flex justify-center w-full text-2xl pb-12">
              Sign-in to the room
            </div>
            <div class="mb-3 xl:w-96">
              <label for="exampleText0" class="form-label inline-block mb-2">Your name</label>
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-sm font-body text-gray-700 bg-white bg-clip-padding border 
                border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Your Name.."
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div class="mb-3 xl:w-96">
            <label for="exampleText0" class="form-label inline-block mb-2">Room Id</label>
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-body text-gray-700 bg-white bg-clip-padding border 
                border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Room Id.."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            </div>
            <div className="flex space-x-2 mt-2 justify-center w-full">
              <button onClick={joinRoom}
              className="inline-block px-6 py-2.5 bg-login-button text-white font-body
              text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 
              hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-blue-800 active:shadow-lg transition 
              duration-150 ease-in-out w-full">Join A Room</button>
            </div>
          </div>
          <div className="flex flex-col bg-dashboard-color rounded-tr-50 rounded-br-50 justify-center px-20">
            <div className="flex font-poppins text-3xl">Join or Create</div>
              <div className="flex font-poppins text-3xl"> a Chat Room</div>
          </div>
        </div>
      </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
