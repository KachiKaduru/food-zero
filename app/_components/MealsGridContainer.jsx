export default function MealsGridContainer({ children }) {
  return (
    <div
      className="grid grid-cols-6 gap-4 auto-rows-[742px] 
  md:grid-cols-4 md:auto-rows-[600px] 
  sm:grid-cols-2 sm:auto-rows-[500px] 
  xs:grid-cols-1 xs:auto-rows-[auto]"
    >
      {children}
    </div>
  );
}
