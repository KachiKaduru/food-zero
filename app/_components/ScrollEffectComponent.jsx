"use client";

import useScrollInView from "@/app/_lib/useScrollInView";

export default function ScrollEffectComponent({ children }) {
  const ref = useScrollInView();

  return (
    <div ref={ref} className="scroll-in">
      {children}
    </div>
  );
}
