"use client";

import { useEffect, useRef, useState } from "react";
import useRooms from "../hooks/use-rooms";
import JoinRoomButton from "./JoinRoomButton";
import Video from "./Video";
import { useRouter } from "next/navigation";

const Room = ({ roomId, username }: { roomId: string; username: string }) => {
  const {
    operations: { joinRoom, setToken },
    properties: { token },
  } = useRooms();
  const videoRef = useRef<HTMLVideoElement>(null);

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const constraints = { video: true };
      setLoading(true);
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          videoRef.current!.srcObject = stream;
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return !token ? (
    <>
      <div className="h-full max-h-full flex flex-col md:flex-row items-center md:justify-center md:gap-24 gap-12 md:px-12 px-4 pt-12">
        <div className="bg-black min-w-[50%] min-h-[50%] rounded-3xl overflow-hidden shadow-2xl relative">
          <video ref={videoRef} autoPlay className="w-full h-full" />
          <p className="absolute right-0 left-0 bottom-0 bg-black text-white text-center py-4 bg-opacity-40">
            Camera Preview
          </p>
          <p className="text-white font-semibold absolute right-4 top-4">{username}</p>
        </div>
        <div className="flex flex-col gap-4  bg-opacity-10 bg-white backdrop-blur-sm rounded-lg shadow-lg border border-white border-opacity-30 p-6">
          <p className="text-2xl text-gray-200">
            Room: <span className="font-bold">{roomId}</span>
          </p>
          <JoinRoomButton roomId={roomId} username={username} joinRoom={joinRoom} />
          <button
            onClick={() => router.back()}
            className="p-2 px-4 font-semibold text-md text-white rounded-full bg-gradient-to-tr from-purple-600 from-0% via-violet-500 via-25% to-purple-900 hover:opacity-80"
          >
            Main Page
          </button>
        </div>
      </div>
    </>
  ) : (
    <Video token={token} setToken={setToken} />
  );
};

export default Room;
