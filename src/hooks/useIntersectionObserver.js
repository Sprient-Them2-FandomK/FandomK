import { useEffect, useRef } from "react";

/**
 * IntersectionObserver 감지 훅
 * @param {{
 *   rootRef?: React.RefObject<HTMLElement> | null;
 *   onIntersect: (entry: IntersectionObserverEntry) => void;
 *   threshold?: number | number[];
 *   rootMargin?: string;
 *   enabled?: boolean;
 * }} options
 */
const useIntersectionObserver = ({
  rootRef = null,
  onIntersect,
  threshold = 0.5,
  rootMargin = "0px",
  enabled = true,
}) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    if (!onIntersect) return;

    const root = rootRef?.current ?? null;
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(entry);
          }
        });
      },
      {
        root,
        threshold,
        rootMargin,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [rootRef, onIntersect, threshold, rootMargin, enabled]);

  return targetRef;
};

export default useIntersectionObserver;
