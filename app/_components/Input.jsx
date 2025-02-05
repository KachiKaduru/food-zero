import { lato } from "../_fonts/fonts";

export default function Input({ type, name, placeholder = "", className }) {
  return (
    <input
      className={`${lato.className} ${className} py-6 px-7 text-xl text-accent-300 border-2 border-solid border-accent-300 w-full `}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
