"use client";

import Link from "next/link";
import useModal from "../hooks/use-modal";
import useRooms from "../hooks/use-rooms";
import Input from "./Input";

const RoomsLoby = () => {
  const { properties, operations } = useRooms();
  const modal = useModal();

  const { roomId, username } = properties;
  const { getRoomId, handleSubmit, handleUsernameChange, setRoomId, setUsername } = operations;

  const handleNewRoomClick = () => {
    getRoomId();
  };

  return (
    <section className="flex flex-col gap-6 md:p-16 p-8  bg-opacity-10 bg-white backdrop-blur-sm rounded-lg shadow-lg border border-white border-opacity-30">
      <div className="flex flex-col gap-4">
        <Input placeholder="username" value={username} setValue={setUsername} />
        <Input placeholder="room id" value={roomId} setValue={setRoomId} withCopyButton />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          className={`rounded-full text-center p-2 px-4 text-white transition ${
            roomId && username
              ? "bg-gradient-to-tr from-sky-600 from-0% via-blue-500 via-25% to-indigo-900"
              : "bg-gray-300 border-gray-300"
          } transition hover:opacity-80`}
          href={`/${username}/${roomId}`}
          style={{
            pointerEvents: roomId && username ? "auto" : "none",
          }}
        >
          Join Room
        </Link>
        <button
          className="p-2 px-4 font-semibold text-md text-white rounded-full transition bg-gradient-to-tr from-purple-600 from-0% via-violet-500 via-25% to-purple-900 hover:opacity-80 "
          onClick={handleNewRoomClick}
        >
          New Room
        </button>
      </div>
    </section>
  );
};

export default RoomsLoby;
