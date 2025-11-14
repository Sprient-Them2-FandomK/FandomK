import { useCallback, useEffect, useRef, useState } from "react";

const useDraggableSlider = (itemCount = 0) => {
  const viewportRef = useRef(null);
  const listRef = useRef(null);

  const [sizes, setSizes] = useState({
    viewportWidth: 0,
    listWidth: 0,
    maxOffset: 0,
  });

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const offsetRef = useRef(0);

  const [offsetState, setOffsetState] = useState(0);

  const clampOffset = useCallback(
    (value) => Math.min(Math.max(value, 0), sizes.maxOffset),
    [sizes.maxOffset]
  );

  const applyTransform = useCallback((withTransition) => {
    if (!listRef.current) return;
    listRef.current.style.transition = withTransition ? "transform 0.3s ease" : "none";
    listRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
  }, []);

  const measureSizes = useCallback(() => {
    if (!viewportRef.current || !listRef.current) return;

    const viewportWidth = viewportRef.current.getBoundingClientRect().width;
    const listWidth = listRef.current.scrollWidth;
    const maxOffset = Math.max(listWidth - viewportWidth, 0);

    setSizes({ viewportWidth, listWidth, maxOffset });

    offsetRef.current = Math.min(offsetRef.current, maxOffset);
    setOffsetState(offsetRef.current);
    applyTransform(false); // 초기 세팅은 애니메이션 X
  }, [applyTransform]);

  useEffect(() => {
    measureSizes();
  }, [itemCount, measureSizes]);

  useEffect(() => {
    window.addEventListener("resize", measureSizes);
    return () => window.removeEventListener("resize", measureSizes);
  }, [measureSizes]);

  // --- 드래그 ---
  const startDrag = useCallback((clientX) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
    startOffsetRef.current = offsetRef.current;
  }, []);

  const moveDrag = useCallback(
    (clientX) => {
      if (!isDraggingRef.current) return;
      const deltaX = clientX - startXRef.current;
      const nextOffset = clampOffset(startOffsetRef.current - deltaX);
      offsetRef.current = nextOffset;
      applyTransform(false); // 드래그 중: transition 없음
    },
    [applyTransform, clampOffset]
  );

  const endDrag = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setOffsetState(offsetRef.current); // 최종 위치만 state에 반영
  }, []);

  // --- 버튼 이동 ---
  const handlePrev = useCallback(() => {
    const next = clampOffset(offsetRef.current - sizes.viewportWidth);
    offsetRef.current = next;
    setOffsetState(next);
    applyTransform(true); // 버튼: transition O
  }, [applyTransform, clampOffset, sizes.viewportWidth]);

  const handleNext = useCallback(() => {
    const next = clampOffset(offsetRef.current + sizes.viewportWidth);
    offsetRef.current = next;
    setOffsetState(next);
    applyTransform(true); // 버튼: transition O
  }, [applyTransform, clampOffset, sizes.viewportWidth]);

  const hasPrev = offsetState > 0;
  const hasNext = offsetState < sizes.maxOffset;

  // --- 마우스 이벤트 ---
  const handleMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      startDrag(e.clientX);

      const handleMouseMove = (moveEvent) => {
        moveDrag(moveEvent.clientX);
      };

      const handleMouseUp = () => {
        endDrag();
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    },
    [startDrag, moveDrag, endDrag]
  );

  // --- 터치 이벤트 ---
  const handleTouchStart = useCallback(
    (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      startDrag(touch.clientX);
    },
    [startDrag]
  );

  const handleTouchMove = useCallback(
    (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      moveDrag(touch.clientX);
    },
    [moveDrag]
  );

  const handleTouchEnd = useCallback(() => {
    endDrag();
  }, [endDrag]);

  return {
    viewportRef,
    listRef,
    hasPrev,
    hasNext,
    handlePrev,
    handleNext,
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useDraggableSlider;
