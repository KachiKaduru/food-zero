import NavigationBar from "@/app/_components/NavigationBar";
import Image from "next/image";

export default function Header({ img }) {
  return (
    <header className="h-[70dvh] w-full relative bg-[#00000075]">
      {img && (
        <Image
          src={img}
          fill
          className="object-cover object-center -z-10"
          alt="Header image"
          priority
        />
      )}
      <NavigationBar />
    </header>
  );
}
