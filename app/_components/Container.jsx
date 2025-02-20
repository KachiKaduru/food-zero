export default function Container({ className = "", children, id = "" }) {
  return (
    <div id={id} className={`max-w-7xl mx-auto px-3 ${className}`}>
      {children}
    </div>
  );
}
