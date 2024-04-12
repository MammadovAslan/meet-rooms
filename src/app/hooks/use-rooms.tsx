"use client";

import { useState } from "react";
import generateId from "../utils/generateId";
import axios from "axios";

const useRooms = () => {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [token, setToken] = useState("");

  const getRoomId = () => {
    setRoomId(generateId());
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const joinRoom = async (username: string, roomId: string) => {
    try {
      const response = await axios.get(`/api/rooms/?username=${username}&room=${roomId}`);
      setToken(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !roomId) return;
  };

  return {
    properties: { username, roomId, token },
    operations: {
      setToken,
      joinRoom,
      getRoomId,
      handleUsernameChange,
      setRoomId,
      handleSubmit,
      setUsername,
    },
  };
};

export default useRooms;

export type UseRooms = ReturnType<typeof useRooms>;
