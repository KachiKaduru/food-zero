const types = {
  normal: "font-bold text-lg sm:text-xl md:text-2xl py-2 md:py-3 px-4 md:px-7",
  large: "font-bold text-lg sm:text-xl md:text-2xl py-2 md:py-3 px-8 md:px-14",
};

export default function Button({ type = "normal", children, className = "" }) {
  return (
    <button className={`${types[type] || types.normal} ${className} transition-all`}>
      {children}
    </button>
  );
}
