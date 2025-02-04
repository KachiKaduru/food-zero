const types = {
  hero: { tag: "h1", className: "font-bold text-8xl" },
  h1: { tag: "h1", className: "font-bold text-7xl" },
  h2: { tag: "h2", className: "font-bold text-6xl" },
  h3: { tag: "h3", className: "font-bold text-5xl" },
  h4: { tag: "h4", className: "font-bold text-4xl" },
  h5: { tag: "h5", className: "font-bold text-2xl" },
  h6: { tag: "h6", className: "font-bold text-xl" },
};

export default function Heading({ type = "hero", className = "", children }) {
  const { tag: Tag, className: baseClass } = types[type];

  return <Tag className={`${baseClass} ${className}`}>{children}</Tag>;
}
