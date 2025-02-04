import Link from "next/link";
import Logo from "./Logo";

export default function NavigationBar() {
  return (
    <nav className="flex justify-between items-center z-10 px-[100px]">
      <Logo />

      <ul className="flex gap-4 text-white">
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
    </nav>
  );
}
