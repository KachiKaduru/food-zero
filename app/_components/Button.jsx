const types = {
  normal: "font-bold text-2xl py-3 px-7",
  large: "font-bold text-2xl py-3 px-14",
};

export default function Button({ type = "normal", children, className = "" }) {
  return (
    <button className={`${types[type] || types.normal} ${className} transition-all`}>
      {children}
    </button>
  );
}
