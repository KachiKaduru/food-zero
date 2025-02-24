import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="h-12 md:h-16">
      <img src="/logo.svg" alt="" className="w-full h-full" />
    </Link>
  );
}
