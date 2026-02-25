"use client";

import React from "react";

interface LessonTopBarProps {
  /** Current lesson index (0-based) */
  currentIndex: number;
  /** Total number of lessons */
  totalLessons: number;
  /** Current lesson title */
  title: string;
  /** Part type label, e.g. "Video", "Reading" */
  typeLabel: string;
  /** Part type icon */
  typeIcon: string;
  /** Duration string */
  duration: string;
  /** Href for previous lesson (undefined if first) */
  prevHref?: string;
  /** Href for next lesson (undefined if last) */
  nextHref?: string;
  /** Href back to course overview */
  courseHref?: string;
}

const TYPE_COLORS: Record<string, string> = {
  Video: "var(--tf-color-primary)",
  "Video with Code Example": "var(--tf-color-primary)",
  Reading: "var(--tf-color-success)",
  Quiz: "var(--tf-color-accent)",
  Article: "var(--tf-color-accent-light)",
  Podcast: "var(--tf-color-warning)",
  Slides: "var(--tf-color-accent)",
  Lab: "var(--tf-color-danger)",
};

export function LessonTopBar({
  currentIndex,
  totalLessons,
  typeLabel,
  typeIcon,
  duration,
  prevHref,
  nextHref,
  courseHref = "/",
}: LessonTopBarProps): React.ReactElement {
  const typeColor = TYPE_COLORS[typeLabel] ?? "var(--tf-color-primary)";

  return (
    <div className="lesson-topbar">
      {/* Left: back to course */}
      <a href={courseHref} className="lesson-topbar__back">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M7.78 12.53a.75.75 0 0 1-1.06 0L3.22 9.03a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 1 1 1.06 1.06L5.56 7.75h5.69a.75.75 0 0 1 0 1.5H5.56l2.22 2.22a.75.75 0 0 1 0 1.06Z" />
        </svg>
        <span>Course</span>
      </a>

      {/* Center: lesson info */}
      <div className="lesson-topbar__center">
        <span className="lesson-topbar__position">
          {currentIndex + 1}
          <span className="lesson-topbar__separator">/</span>
          {totalLessons}
        </span>
        <span className="lesson-topbar__dot">·</span>
        <span className="lesson-topbar__type" style={{ color: typeColor }}>
          {typeIcon} {typeLabel}
        </span>
        <span className="lesson-topbar__dot">·</span>
        <span className="lesson-topbar__duration">{duration}</span>
      </div>

      {/* Right: prev / next */}
      <div className="lesson-topbar__nav">
        {prevHref ? (
          <a
            href={prevHref}
            className="lesson-topbar__arrow"
            aria-label="Previous lesson"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M9.78 4.47a.75.75 0 0 1 0 1.06L7.56 7.75h0l2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.72-2.72a.75.75 0 0 1 0-1.06l2.72-2.72a.75.75 0 0 1 1.06 0Z" />
            </svg>
          </a>
        ) : (
          <span className="lesson-topbar__arrow lesson-topbar__arrow--disabled">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M9.78 4.47a.75.75 0 0 1 0 1.06L7.56 7.75h0l2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.72-2.72a.75.75 0 0 1 0-1.06l2.72-2.72a.75.75 0 0 1 1.06 0Z" />
            </svg>
          </span>
        )}
        {nextHref ? (
          <a
            href={nextHref}
            className="lesson-topbar__arrow"
            aria-label="Next lesson"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6.22 4.47a.75.75 0 0 1 1.06 0l2.72 2.72a.75.75 0 0 1 0 1.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06l2.22-2.22h0L6.22 5.53a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </a>
        ) : (
          <span className="lesson-topbar__arrow lesson-topbar__arrow--disabled">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6.22 4.47a.75.75 0 0 1 1.06 0l2.72 2.72a.75.75 0 0 1 0 1.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06l2.22-2.22h0L6.22 5.53a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}
