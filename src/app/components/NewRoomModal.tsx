import { useState } from "react";
import { UseModal } from "../hooks/use-modal";
import { UseRooms } from "../hooks/use-rooms";
import Modal from "./Modal";

type NewRoomModalProps = {
  closeModal: UseModal["operations"]["closeModal"];
  roomId: UseRooms["properties"]["roomId"];
};

const NewRoomModal = ({ closeModal, roomId }: NewRoomModalProps) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(roomId);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };
  return (
    <Modal closeModal={closeModal}>
      <h3 className="text-lg font-semibold text-gray-400">Room ID</h3>
      <div className="flex gap-2 mt-5">
        <p className="border-2 p-2 px-4 rounded-lg">{roomId}</p>
        <button onClick={handleCopyClick} className="px-2 py-1 bg-blue-500 text-white rounded">
          Copy
        </button>
      </div>
      {copySuccess && <p className="text-green-500 mt-2">Copied!</p>}
    </Modal>
  );
};

export default NewRoomModal;
