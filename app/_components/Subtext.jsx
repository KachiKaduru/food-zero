import { lato } from "../_fonts/fonts";

export default function Subtext({ children, className = "", color = "text-accent-200" }) {
  return <p className={`${lato.className} ${className} ${color} text-xl`}>{children}</p>;
}
