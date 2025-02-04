import NavigationBar from "@/app/_components/NavigationBar";
import Image from "next/image";

export default function Header({ img }) {
  return (
    <div className="h-[80dvh] w-full relative bg-[#00000075]">
      {img && (
        <Image src={img} fill className="object-cover object-center -z-10" alt="Header image" />
      )}
      <NavigationBar />
    </div>
  );
}
