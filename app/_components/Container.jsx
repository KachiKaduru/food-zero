export default function Container({ className = "", children, id = "" }) {
  return (
    <div id={id} className={`max-w-7xl mx-auto ${className} px-3`}>
      {children}
    </div>
  );
}
