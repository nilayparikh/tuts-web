"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface CourseFilterBarProps {
  /** All available tags across courses */
  allTags: string[];
  /** All available difficulty levels */
  allDifficulties: string[];
  /** Currently active tag filters */
  activeTags: string[];
  /** Currently active difficulty filter (single) */
  activeDifficulty: string | null;
  /** Callback when tags change */
  onTagsChange: (tags: string[]) => void;
  /** Callback when difficulty changes */
  onDifficultyChange: (difficulty: string | null) => void;
}

// ─── Difficulty config ─────────────────────────────────────────────────────

const DIFFICULTY_META: Record<string, { label: string; color: string }> = {
  beginner: { label: "Beginner", color: "var(--tf-color-success)" },
  moderate: { label: "Moderate", color: "var(--tf-color-warning)" },
  expert: { label: "Expert", color: "var(--tf-color-danger)" },
};

// ─── Styles ────────────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    alignItems: "center",
    gap: "var(--tf-space-3)",
    flexWrap: "wrap" as const,
  },
  trigger: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    padding: "0.375rem 0.75rem",
    borderRadius: "var(--tf-radius-md)",
    border: "1px solid var(--tf-border-default)",
    background: "var(--tf-bg-surface)",
    color: "var(--tf-text-secondary)",
    fontSize: "var(--tf-text-sm)",
    fontFamily: "var(--tf-font-body)",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 150ms ease",
    userSelect: "none" as const,
    whiteSpace: "nowrap" as const,
    position: "relative" as const,
  },
  triggerActive: {
    borderColor: "var(--tf-color-primary-border)",
    color: "var(--tf-color-primary)",
    background: "var(--tf-color-primary-container)",
  },
  chevron: {
    fontSize: "0.6rem",
    opacity: 0.6,
    transition: "transform 150ms ease",
  },
  chevronOpen: {
    transform: "rotate(180deg)",
  },
  dropdown: {
    position: "absolute" as const,
    top: "calc(100% + 0.375rem)",
    left: 0,
    zIndex: 50,
    minWidth: "10rem",
    padding: "0.375rem",
    borderRadius: "var(--tf-radius-md)",
    border: "1px solid var(--tf-border-default)",
    background: "var(--tf-bg-elevated)",
    boxShadow: "var(--tf-shadow-level2)",
  },
  option: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    width: "100%",
    padding: "0.375rem 0.5rem",
    borderRadius: "var(--tf-radius-sm)",
    border: "none",
    background: "transparent",
    color: "var(--tf-text-secondary)",
    fontSize: "var(--tf-text-sm)",
    fontFamily: "var(--tf-font-body)",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background 100ms ease, color 100ms ease",
    textAlign: "left" as const,
    whiteSpace: "nowrap" as const,
  },
  optionActive: {
    color: "var(--tf-color-primary)",
    background: "var(--tf-color-primary-container)",
    fontWeight: 600,
  },
  dot: {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "var(--tf-radius-full)",
    flexShrink: 0,
  },
  check: {
    fontSize: "0.75rem",
    width: "1rem",
    textAlign: "center" as const,
    flexShrink: 0,
  },
  clearBtn: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.375rem 0.5rem",
    borderRadius: "var(--tf-radius-md)",
    border: "1px solid transparent",
    background: "transparent",
    color: "var(--tf-text-muted)",
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-body)",
    cursor: "pointer",
    transition: "color 150ms ease",
    userSelect: "none" as const,
  },
};

// ─── Dropdown hook ─────────────────────────────────────────────────────────

function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return { open, setOpen, ref };
}

// ─── Component ─────────────────────────────────────────────────────────────

export function CourseFilterBar({
  allTags,
  allDifficulties,
  activeTags,
  activeDifficulty,
  onTagsChange,
  onDifficultyChange,
}: CourseFilterBarProps) {
  const levelDd = useDropdown();
  const topicDd = useDropdown();

  const hasFilters = activeTags.length > 0 || activeDifficulty !== null;

  const clearAll = () => {
    onTagsChange([]);
    onDifficultyChange(null);
  };

  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      onTagsChange(activeTags.filter((t) => t !== tag));
    } else {
      onTagsChange([...activeTags, tag]);
    }
  };

  const toggleDifficulty = (d: string) => {
    onDifficultyChange(activeDifficulty === d ? null : d);
    levelDd.setOpen(false);
  };

  const sortedTags = useMemo(
    () => [...allTags].sort((a, b) => a.localeCompare(b)),
    [allTags],
  );

  const activeDiffLabel = activeDifficulty
    ? DIFFICULTY_META[activeDifficulty]?.label ?? activeDifficulty
    : null;

  return (
    <div style={s.root}>
      {/* ── Level dropdown ── */}
      {allDifficulties.length > 0 && (
        <div ref={levelDd.ref} style={{ position: "relative" }}>
          <button
            type="button"
            onClick={() => levelDd.setOpen(!levelDd.open)}
            style={{
              ...s.trigger,
              ...(activeDifficulty ? s.triggerActive : {}),
            }}
          >
            {activeDiffLabel ?? "Level"}
            <span
              style={{
                ...s.chevron,
                ...(levelDd.open ? s.chevronOpen : {}),
              }}
            >
              ▾
            </span>
          </button>
          {levelDd.open && (
            <div style={s.dropdown}>
              {allDifficulties.map((d) => {
                const meta = DIFFICULTY_META[d];
                const active = activeDifficulty === d;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleDifficulty(d)}
                    style={{
                      ...s.option,
                      ...(active ? s.optionActive : {}),
                    }}
                    onMouseEnter={(e) => {
                      if (!active)
                        e.currentTarget.style.background =
                          "var(--tf-bg-highest)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active)
                        e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span
                      style={{
                        ...s.dot,
                        background: meta?.color ?? "var(--tf-text-muted)",
                      }}
                    />
                    {meta?.label ?? d}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Topics dropdown ── */}
      {sortedTags.length > 0 && (
        <div ref={topicDd.ref} style={{ position: "relative" }}>
          <button
            type="button"
            onClick={() => topicDd.setOpen(!topicDd.open)}
            style={{
              ...s.trigger,
              ...(activeTags.length > 0 ? s.triggerActive : {}),
            }}
          >
            {activeTags.length > 0
              ? `Topics (${activeTags.length})`
              : "Topics"}
            <span
              style={{
                ...s.chevron,
                ...(topicDd.open ? s.chevronOpen : {}),
              }}
            >
              ▾
            </span>
          </button>
          {topicDd.open && (
            <div style={s.dropdown}>
              {sortedTags.map((tag) => {
                const active = activeTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    style={{
                      ...s.option,
                      ...(active ? s.optionActive : {}),
                    }}
                    onMouseEnter={(e) => {
                      if (!active)
                        e.currentTarget.style.background =
                          "var(--tf-bg-highest)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active)
                        e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span style={s.check}>{active ? "✓" : ""}</span>
                    {tag}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Clear ── */}
      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          style={s.clearBtn}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--tf-color-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--tf-text-muted)";
          }}
        >
          ✕ Clear
        </button>
      )}
    </div>
  );
}
