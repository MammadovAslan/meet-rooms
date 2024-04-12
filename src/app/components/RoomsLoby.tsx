"use client";

import Link from "next/link";
import useModal from "../hooks/use-modal";
import useRooms from "../hooks/use-rooms";
import Input from "./Input";
import NewRoomModal from "./NewRoomModal";

const RoomsLoby = () => {
  const { properties, operations } = useRooms();
  const modal = useModal();

  const { roomId, username } = properties;
  const { getRoomId, handleSubmit, handleUsernameChange, setRoomId, setUsername } = operations;

  const { closeModal, openModal, toggleModal } = modal.operations;
  const { showModal } = modal.properties;

  const handleNewRoomClick = () => {
    getRoomId();
    openModal();
  };

  return (
    <section className="flex flex-col gap-6 p-4 rounded-lg bg-white">
      <label className="flex flex-col gap-4">
        <p>Enter Username</p>
        <Input placeholder="username" value={username} setValue={setUsername} />
      </label>
      <div className="flex md:flex-row flex-col gap-6 items-start">
        <button
          className="p-2 px-4 font-semibold text-md bg-sky-600 text-white rounded-lg transition hover:bg-sky-700"
          onClick={handleNewRoomClick}
        >
          New Room
        </button>
        <div className="flex items-center gap-2">
          <Input placeholder="room id" value={roomId} setValue={setRoomId} />
          <Link
            className={`text-gray-400 ${
              roomId && username ? "hover:text-blue-600" : ""
            } transition`}
            href={`/${username}/${roomId}`}
            style={{
              pointerEvents: roomId && username ? "auto" : "none",
            }}
          >
            Join Room
          </Link>
        </div>
      </div>
      {showModal && <NewRoomModal closeModal={closeModal} roomId={roomId} />}
    </section>
  );
};

export default RoomsLoby;
