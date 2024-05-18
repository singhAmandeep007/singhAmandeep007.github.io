export const DATE_FORMAT_YYYY__MM__DD = "YYYY-MM-DD";

export const MAP_CONTRIBUTION_QUARTILE_TO_LEVEL = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
} as const;

export const WEEK_NAMES = ["", "Mon", "", "Wed", "", "Fri", ""];

export const DEFAULT = {
  THEME: [
    "var(--color-calendar-graph-day-bg)",
    "var(--color-calendar-graph-day-l1-bg)",
    "var(--color-calendar-graph-day-l2-bg)",
    "var(--color-calendar-graph-day-l3-bg)",
    "var(--color-calendar-graph-day-l4-bg)",
  ],
  THEME_GITHUB: ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
  LABEL_FONT_SIZE: 10,
  CELL_SIZE: 11,
  CELL_MARGIN: 2,
  X_LABEL_WIDTH: 28,
  Y_LABEL_HEIGHT: 25,
} as const;
