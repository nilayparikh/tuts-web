import React from "react";
import type { CourseDefinition } from "@/data/course";

interface CourseStatsBarProps {
  course: CourseDefinition;
}

export function CourseStatsBar({
  course,
}: CourseStatsBarProps): React.ReactElement {
  const stats = [
    {
      label: "Lessons",
      value: `${course.parts.length}`,
      icon: "📚",
    },
    {
      label: "Duration",
      value: course.totalDuration,
      icon: "⏱",
    },
    {
      label: "Frameworks",
      value: "6",
      icon: "🔧",
    },
    {
      label: "License",
      value: "MIT",
      icon: "📄",
    },
  ];

  return (
    <div className="course-stats-bar">
      {stats.map((stat) => (
        <div key={stat.label} className="course-stats-bar__item">
          <span className="course-stats-bar__icon">{stat.icon}</span>
          <span className="course-stats-bar__value">{stat.value}</span>
          <span className="course-stats-bar__label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
