"use client";

import React, { useState, useMemo } from "react";
import type { MonoDefinition } from "@/data/monos";
import { MonoCard } from "./MonoCard";

// ─── Constants ─────────────────────────────────────────────────────────────

const PAGE_SIZE = 20;
const QUICK_TAG_COUNT = 5;

// ─── Types ─────────────────────────────────────────────────────────────────

export interface MonoGridProps {
  monos: MonoDefinition[];
  topicName?: string;
}

// ─── Styles ────────────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--tf-space-6)",
  },
  heading: {
    margin: 0,
    fontSize: "var(--tf-text-3xl)",
    fontFamily: "var(--tf-font-display)",
    fontWeight: 700,
    color: "var(--tf-text-primary)",
    lineHeight: "var(--tf-leading-tight)",
  },
  quickTags: {
    display: "flex",
    alignItems: "center",
    gap: "var(--tf-space-2)",
    flexWrap: "wrap" as const,
  },
  quickTag: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.25rem 0.625rem",
    borderRadius: "var(--tf-radius-full)",
    border: "1px solid var(--tf-border-default)",
    background: "transparent",
    color: "var(--tf-text-secondary)",
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-body)",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 150ms ease",
    userSelect: "none" as const,
    whiteSpace: "nowrap" as const,
  },
  quickTagActive: {
    background: "var(--tf-color-primary-container)",
    borderColor: "var(--tf-color-primary-border)",
    color: "var(--tf-color-primary)",
    fontWeight: 600,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "var(--tf-space-5)",
  },
  empty: {
    gridColumn: "1 / -1",
    textAlign: "center" as const,
    padding: "var(--tf-space-10) var(--tf-space-4)",
    fontSize: "var(--tf-text-sm)",
    fontFamily: "var(--tf-font-body)",
    color: "var(--tf-text-muted)",
  },
  count: {
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-mono)",
    color: "var(--tf-text-muted)",
    letterSpacing: "var(--tf-tracking-wide)",
    whiteSpace: "nowrap" as const,
  },
};

// ─── Component ─────────────────────────────────────────────────────────────

export function MonoGrid({ monos, topicName }: MonoGridProps) {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    monos.forEach((m) => m.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet);
  }, [monos]);

  const quickTags = useMemo(() => {
    const freq = new Map<string, number>();
    monos.forEach((m) =>
      m.tags.forEach((t) => freq.set(t, (freq.get(t) ?? 0) + 1)),
    );
    return Array.from(freq.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, QUICK_TAG_COUNT)
      .map(([tag]) => tag);
  }, [monos]);

  const filtered = useMemo(() => {
    return monos.filter((m) => {
      if (activeTags.length > 0 && !activeTags.some((t) => m.tags.includes(t)))
        return false;
      return true;
    });
  }, [monos, activeTags]);

  const paged = filtered.slice(0, PAGE_SIZE);
  const hasFilters = activeTags.length > 0;

  const toggleQuickTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <div style={s.root}>
      {topicName && <h2 style={s.heading}>{topicName}</h2>}

      {quickTags.length > 0 && (
        <div style={s.quickTags}>
          {quickTags.map((tag) => {
            const active = activeTags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleQuickTag(tag)}
                style={{
                  ...s.quickTag,
                  ...(active ? s.quickTagActive : {}),
                }}
              >
                {tag}
              </button>
            );
          })}
          {hasFilters && (
            <span style={s.count}>
              {filtered.length} of {monos.length} mono
              {monos.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      )}

      <div style={s.grid}>
        {paged.length > 0 ? (
          paged.map((mono) => (
            <MonoCard
              key={mono.slug}
              slug={mono.slug}
              icon={mono.icon ?? "📹"}
              title={mono.title}
              description={mono.description}
              duration={mono.duration}
              tags={mono.tags}
              difficulty={mono.difficulty}
              series={mono.series}
              instructor={mono.instructor}
            />
          ))
        ) : (
          <div style={s.empty}>
            No monos match the current filters. Try removing some filters.
          </div>
        )}
      </div>
    </div>
  );
}
