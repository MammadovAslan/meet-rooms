"use client";

import useRooms from "../hooks/use-rooms";
import JoinRoomButton from "./JoinRoomButton";
import NavBar from "./NavBar";
import Video from "./Video";

const Room = ({ roomId, username }: { roomId: string; username: string }) => {
  const {
    operations: { joinRoom, setToken },
    properties: { token },
  } = useRooms();

  return !token ? (
    <>
      <NavBar />
      <div className="h-full max-h-full flex flex-col items-center justify-center gap-4">
        <div>
          <p className="text-2xl text-gray-600">
            Username: <span className="font-bold">{username}</span>
          </p>
          <p className="text-2xl text-gray-600">
            Room Id: <span className="font-bold">{roomId}</span>
          </p>
        </div>
        <JoinRoomButton roomId={roomId} username={username} joinRoom={joinRoom} />
      </div>
    </>
  ) : (
    <Video token={token} setToken={setToken} />
  );
};

export default Room;
