import { lato } from "../_fonts/fonts";

export default function Subtext({ children, className = "", color = "accent-200" }) {
  return (
    <p className={`${lato.className} ${className} text-${color} text-base sm:text-lg md:text-xl`}>
      {children}
    </p>
  );
}
