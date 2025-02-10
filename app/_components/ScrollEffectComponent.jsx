"use client";

import useScrollInView from "@/app/_lib/useScrollInView";

export default function ScrollEffectComponent({ children, className = "" }) {
  const ref = useScrollInView();

  return (
    <div ref={ref} className={`scroll-in ${className}`}>
      {children}
    </div>
  );
}
