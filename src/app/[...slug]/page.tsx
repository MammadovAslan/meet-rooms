import Room from "../components/Room";

export default function RoomPage({ params }: { params: { slug: string[] } }) {
  const username = params.slug[0];
  const roomId = params.slug[1];

  return (
    <div className="grow">
      <Room roomId={roomId} username={username} />
    </div>
  );
}
