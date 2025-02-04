const types = {
  hero: { tag: "h1", className: "text-8xl" },
  h1: { tag: "h1", className: "text-7xl" },
  h2: { tag: "h2", className: "text-6xl" },
  h3: { tag: "h3", className: "text-5xl" },
  h4: { tag: "h4", className: "text-4xl" },
  h5: { tag: "h5", className: "text-2xl" },
  h6: { tag: "h6", className: "text-xl" },
};

export default function Heading({ type = "hero", className, children }) {
  const { tag: Tag, className: baseClass } = types[type];

  return <Tag className={`${baseClass} ${className}`}>{children}</Tag>;
}
