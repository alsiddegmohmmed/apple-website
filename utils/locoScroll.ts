// utils/locoScroll.tsx
import { useEffect, useState } from "react";

export default function useLocoScroll(containerRef: React.RefObject<HTMLElement>) {
  const [locoScroll, setLocoScroll] = useState<any>(null);

  useEffect(() => {
    let scrollInstance: any = null;
    let isMounted = true;

    const initLocoScroll = async () => {
      if (typeof window === "undefined" || !containerRef.current) return;

      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      scrollInstance = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        multiplier: 1,
        lerp: 0.1,
      });

      if (isMounted) {
        setLocoScroll(scrollInstance);
      }
    };

    initLocoScroll();

    return () => {
      isMounted = false;
      if (scrollInstance) scrollInstance.destroy();
    };
  }, [containerRef]);

  return locoScroll;
}
