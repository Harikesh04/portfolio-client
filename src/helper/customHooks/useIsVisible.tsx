"use client";

import { useEffect, useState } from "react";

interface useIsVisibleProps {
  ref: React.RefObject<HTMLElement>;
}

export default function useIsVisible({ ref }: useIsVisibleProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.6,
        rootMargin: "-50px",
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isVisible;
}
