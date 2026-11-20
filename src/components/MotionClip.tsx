"use client";

import { useEffect, useRef } from "react";
import type { Clip } from "@/data/brand-projects";
import { asset } from "@/lib/site";

// Clip corto en bucle y sin sonido. Solo se reproduce cuando está a la vista,
// y no se reproduce solo si la persona prefiere menos movimiento.
export function MotionClip({ clip, dark = false }: { clip: Clip; dark?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure>
      <video
        ref={ref}
        className="aspect-video w-full rounded-xl bg-black object-cover"
        src={asset(clip.src)}
        poster={asset(clip.poster)}
        muted
        loop
        playsInline
        controls
        preload="none"
        aria-label={`${clip.title} para ${clip.client}`}
      />
      <figcaption className={`mt-2 text-sm ${dark ? "text-ice/80" : "text-deep/80"}`}>
        <b className={dark ? "text-white" : "text-navy"}>{clip.client}</b> · {clip.title}
      </figcaption>
    </figure>
  );
}
