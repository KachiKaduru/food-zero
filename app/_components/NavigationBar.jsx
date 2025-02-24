import Link from "next/link";
import Logo from "./Logo";
import Container from "./Container";
import MenuButton from "./MenuButton";

export default function NavigationBar() {
  return (
    <nav className="z-10 py-8 md:py-12 px-8 sm:px-16 md:px-[100px]">
      <Container className="flex justify-between items-center ">
        <Logo />

        <MenuButton className="md:hidden" />

        <ul className="hidden md:flex gap-10 text-white text-xl">
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blogs">Blog</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
