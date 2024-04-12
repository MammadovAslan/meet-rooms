import { ControlBar, LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
import VideoStream from "./VideoStream";
import "@livekit/components-styles";
import { UseRooms } from "../hooks/use-rooms";

const Video = ({
  token,
  setToken,
}: {
  token: string;
  setToken: UseRooms["operations"]["setToken"];
}) => {
  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      data-lk-theme="default"
      className="overflow-hidden"
      onDisconnected={() => setToken("")}
    >
      <VideoStream />
      <RoomAudioRenderer />
      <ControlBar />
    </LiveKitRoom>
  );
};

export default Video;
