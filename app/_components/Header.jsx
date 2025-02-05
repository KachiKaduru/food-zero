import NavigationBar from "@/app/_components/NavigationBar";
import Image from "next/image";
import Container from "./Container";

export default function Header({ img, children, className = "" }) {
  return (
    <header className="h-[95dvh] w-full relative bg-[#00000075] text-accent-50">
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

      <Container className={`${className} mt-10`}>{children}</Container>
    </header>
  );
}
