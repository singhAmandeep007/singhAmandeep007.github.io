import { COLOR_VARIANTS } from "@/Common/styles.config";

export const MAP_CONTRIBUTION_QUARTILE_TO_LEVEL = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
} as const;

export type TContributionLevel = keyof typeof MAP_CONTRIBUTION_QUARTILE_TO_LEVEL;

export const DEFAULT = {
  COLOR_FONT: COLOR_VARIANTS.font,
  COLOR_STROKE: COLOR_VARIANTS["github-calendar-cell-outline"],
  THEME: [
    `var(${COLOR_VARIANTS["github-calendar-day-bg"]})`,
    `var(${COLOR_VARIANTS["github-calendar-day-bg-l1"]})`,
    `var(${COLOR_VARIANTS["github-calendar-day-bg-l2"]})`,
    `var(${COLOR_VARIANTS["github-calendar-day-bg-l3"]})`,
    `var(${COLOR_VARIANTS["github-calendar-day-bg-l4"]})`,
  ],
  LABEL_FONT_SIZE: 10, // Font size for month and weekday labels
  CELL_SIZE: 10, // Size of each rectangle
  CELL_MARGIN: 2, // Margin between rectangles
  WEEK_MARGIN: 4, // Margin between weeks
  LABEL_OFFSET: 30, // Offset for labels
} as const;

export const WEEK_LABELS = ["Mon", "Wed", "Fri"];
export const WEEK_LABELS_POSITIONS = [1, 3, 5];
