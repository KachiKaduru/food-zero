"use client";

import { useEffect, useRef } from "react";

const useScrollInView = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const revealElement = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden-stn"); // Show when in view
      } else {
        entry.target.classList.add("hidden-stn"); // Hide when out of view
      }
    };

    const observer = new IntersectionObserver(revealElement, {
      root: null,
      threshold: 0.15,
    });

    observer.observe(element);
    element.classList.add("hidden-stn");

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useScrollInView;
