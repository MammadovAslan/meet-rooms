"use client";
import useRooms, { UseRooms } from "../hooks/use-rooms";

const JoinRoomButton = ({
  roomId,
  username,
  joinRoom,
}: {
  username: string;
  roomId: string;
  joinRoom: UseRooms["operations"]["joinRoom"];
}) => {
  const handleClick = () => {
    joinRoom(username, roomId);
  };

  return (
    <button
      type="button"
      className="p-2 px-4 rounded-lg text-white bg-blue-500"
      onClick={handleClick}
    >
      Join Room
    </button>
  );
};

export default JoinRoomButton;
