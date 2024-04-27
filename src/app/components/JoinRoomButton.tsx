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
      className="p-2 px-4 rounded-full text-white font-semibold bg-gradient-to-tr from-sky-600 from-0% via-blue-500 via-25% to-indigo-900"
      onClick={handleClick}
    >
      Join Room
    </button>
  );
};

export default JoinRoomButton;
