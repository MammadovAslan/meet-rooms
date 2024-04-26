"use client";

import {
  Chat,
  ChatToggle,
  ControlBar,
  LayoutContextProvider,
  LiveKitRoom,
  RoomAudioRenderer,
} from "@livekit/components-react";
import VideoStream from "./VideoStream";
import "@livekit/components-styles";
import { UseRooms } from "../hooks/use-rooms";
import { useState } from "react";
import { IoMdChatboxes } from "react-icons/io";

const Video = ({
  token,
  setToken,
}: {
  token: string;
  setToken: UseRooms["operations"]["setToken"];
}) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <LayoutContextProvider>
      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        data-lk-theme="default"
        className="overflow-hidden md:px-24 "
        onDisconnected={() => setToken("")}
      >
        <div className="flex">
          <VideoStream />
          <div className="flex relative">
            {showChat && <Chat />}
            <div className="absolute md:right-[-56px] md:top-2 right-2 top-2 p-4 md:p-0">
              <ChatToggle onClick={() => setShowChat((prev) => !prev)}>
                <IoMdChatboxes />
              </ChatToggle>
            </div>
          </div>
        </div>
        <RoomAudioRenderer />
        <ControlBar />
      </LiveKitRoom>
    </LayoutContextProvider>
  );
};

export default Video;
