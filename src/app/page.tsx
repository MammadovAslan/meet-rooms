import Image from "next/image";
import RoomsLoby from "./components/RoomsLoby";

export default function Home() {
  return (
    <div className="sm:px-12 sm:py-16 p-4 flex flex-col items-center">
      <RoomsLoby />
    </div>
  );
}
