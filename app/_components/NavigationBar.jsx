import Link from "next/link";
import Logo from "./Logo";
import Container from "./Container";

export default function NavigationBar() {
  return (
    <nav className="z-10 py-12 px-[100px]">
      <Container className="flex justify-between items-center ">
        <Logo />

        <ul className="flex gap-4 text-white text-xl">
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
