"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MIN_THUMB_HEIGHT = 32;

export function PageScrollbar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const [trackHeight, setTrackHeight] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [visible, setVisible] = useState(false);

  const update = useCallback(() => {
    const doc = document.documentElement;
    const viewportHeight = window.innerHeight;
    const scrollHeight = doc.scrollHeight;
    const scrollTop = window.scrollY;
    const track = trackRef.current;
    const trackH = track?.clientHeight ?? viewportHeight;

    setVisible(scrollHeight > viewportHeight + 1);

    const proportionalHeight = (viewportHeight / scrollHeight) * trackH;
    const height = Math.max(proportionalHeight, MIN_THUMB_HEIGHT);
    const maxScroll = scrollHeight - viewportHeight;
    const scrollFraction = maxScroll > 0 ? scrollTop / maxScroll : 0;

    setTrackHeight(trackH);
    setThumbHeight(height);
    setThumbTop(scrollFraction * (trackH - height));
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const observer = new ResizeObserver(update);
    observer.observe(document.documentElement);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [update]);

  const scrollToFraction = useCallback((clientY: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const fraction = Math.min(Math.max((clientY - rect.top) / rect.height, 0), 1);
    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - window.innerHeight;
    window.scrollTo({ top: fraction * maxScroll, behavior: "auto" });
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!isDraggingRef.current) return;
      scrollToFraction(event.clientY);
    };
    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [scrollToFraction]);

  if (!visible) return null;

  return (
    <div
      ref={trackRef}
      onPointerDown={(event) => {
        if (event.target === trackRef.current) scrollToFraction(event.clientY);
      }}
      className="fixed right-0 top-0 z-50 hidden h-dvh w-3 cursor-pointer md:block"
      style={{ height: trackHeight || "100dvh" }}
    >
      <div
        role="scrollbar"
        aria-orientation="vertical"
        aria-valuenow={Math.round((thumbTop / Math.max(trackHeight - thumbHeight, 1)) * 100)}
        onPointerDown={(event) => {
          event.stopPropagation();
          isDraggingRef.current = true;
          scrollToFraction(event.clientY);
        }}
        className="absolute right-1 w-1.5 cursor-grab bg-primary-pink/70 transition-colors duration-200 hover:bg-primary-pink active:cursor-grabbing active:bg-primary-pink"
        style={{ height: thumbHeight, top: thumbTop }}
      />
    </div>
  );
}
