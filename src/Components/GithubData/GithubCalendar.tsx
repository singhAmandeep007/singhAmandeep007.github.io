import { TGithubUserData } from "./services";

import { formatDate } from "@/Common/utils";

import {
  DEFAULT,
  MAP_CONTRIBUTION_QUARTILE_TO_LEVEL,
  TContributionLevel,
  WEEK_LABELS,
  WEEK_LABELS_POSITIONS,
} from "./consts";

const { CELL_MARGIN, WEEK_MARGIN, CELL_SIZE, LABEL_FONT_SIZE, LABEL_OFFSET, THEME, COLOR_FONT, COLOR_STROKE } = DEFAULT;

function getRectColor(contributionLevel: TContributionLevel) {
  const level = MAP_CONTRIBUTION_QUARTILE_TO_LEVEL[contributionLevel];

  return THEME[level];
}

const labelStyles = {
  fontSize: `${DEFAULT.LABEL_FONT_SIZE}px`,
  fill: `var(${COLOR_FONT})`,
};

const cellStyles = {
  strokeWidth: "1px",
  stroke: `var(${COLOR_STROKE})`,
};

export function GithubCalendar({
  contributionCalendar,
}: {
  contributionCalendar: TGithubUserData["contributionsCollection"]["contributionCalendar"];
}) {
  let x = LABEL_OFFSET;
  let y = LABEL_OFFSET;
  // to track the x-coordinate of the first occurrence of each month.
  const monthPositions: { [key: string]: number } = {};

  // Cells
  const rects = contributionCalendar.weeks.flatMap((week, weekIndex) => {
    const days = week.contributionDays.map((day, dayIndex) => {
      const date = new Date(day.date);
      const monthKey = `${date.getFullYear()}-${date.getMonth()}`;

      if (!monthPositions[monthKey]) {
        // update the monthPositions with the x-coordinate where each month starts.
        monthPositions[monthKey] = x;
      }

      const rect = (
        <rect
          key={`cell-key-${weekIndex}-${dayIndex}`}
          x={x}
          y={y}
          width={CELL_SIZE}
          height={CELL_SIZE}
          fill={getRectColor(day.contributionLevel as TContributionLevel)}
          data-level={day.contributionLevel}
          data-date={day.date}
          rx={3}
          ry={3}
          style={cellStyles}
        >
          <title>
            {day.contributionCount} contributions on {formatDate(day.date)}.
          </title>
        </rect>
      );
      y += CELL_SIZE + CELL_MARGIN;
      return rect;
    });
    y = LABEL_OFFSET;

    x += CELL_SIZE + WEEK_MARGIN;
    return days;
  });

  // Month labels
  const monthLabels = contributionCalendar.months.map((month, index) => {
    const date = new Date(month.firstDay);
    const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
    // if there is a key in the monthPositions object which matches month-year, then get the x-coordinate of that month. Otherwise, default to 0.
    const xPos = monthPositions[monthKey] || 0;

    return (
      <text
        key={`month-key-${index}`}
        // x={LABEL_OFFSET + index * (CELL_SIZE + WEEK_MARGIN) * 4} // Approximate x position, assuming 4 weeks in a month
        x={xPos + LABEL_FONT_SIZE / 2}
        y={LABEL_OFFSET - 5} // Above the rectangles
        textAnchor="end"
        style={{ ...labelStyles, writingMode: "vertical-lr" }}
      >
        {month.name}
      </text>
    );
  });

  // Weekday labels
  const weekdayLabels = WEEK_LABELS.map((label, index) => (
    <text
      key={`week-day-key-${index}`}
      x={LABEL_OFFSET - 5} // Left of the rectangles
      y={LABEL_OFFSET + WEEK_LABELS_POSITIONS[index] * (CELL_SIZE + CELL_MARGIN) + CELL_SIZE / 2} // Approximate y position
      alignmentBaseline="middle"
      textAnchor="end"
      style={labelStyles}
    >
      {label}
    </text>
  ));

  function getDimensions() {
    return {
      width: x + CELL_SIZE,
      height: LABEL_OFFSET + 7 * (CELL_SIZE + CELL_MARGIN), // 7 days in a week,
    };
  }

  function getLegendDimensions() {
    return {
      width: getDimensions().width,
      height: CELL_SIZE + CELL_MARGIN,
    };
  }

  const { width, height } = getDimensions();

  const { width: legendWidth, height: legendHeight } = getLegendDimensions();

  return (
    <div
      style={{
        maxWidth: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        width: "min-content",
        margin: "auto",
        height: `${height + LABEL_OFFSET * 2}px`,
      }}
    >
      <svg
        width={width}
        height={height}
        xmlns={"http://www.w3.org/2000/svg"}
        viewBox={`0 0 ${width} ${height}`}
      >
        {monthLabels}
        {weekdayLabels}
        {rects}
      </svg>

      <svg
        width={legendWidth}
        height={legendHeight + LABEL_OFFSET}
        viewBox={`0 0 ${legendWidth} ${legendHeight}`}
      >
        <text
          x={legendWidth - THEME.length * (CELL_SIZE + CELL_MARGIN * 4) - LABEL_OFFSET * 2}
          y={LABEL_FONT_SIZE - CELL_MARGIN}
          style={labelStyles}
        >
          Less
        </text>
        <g
          style={{
            transform: `translateX(${legendWidth - THEME.length * CELL_SIZE - LABEL_OFFSET * 2}px)`,
          }}
        >
          {DEFAULT.THEME.map((color, index) => (
            <rect
              key={`legend-${index}`}
              x={index * 13 - DEFAULT.CELL_SIZE}
              y={0}
              width={DEFAULT.CELL_SIZE}
              height={DEFAULT.CELL_SIZE}
              fill={color}
              style={cellStyles}
              rx={3}
              ry={3}
            />
          ))}
        </g>
        <text
          x={legendWidth - 45}
          y={LABEL_FONT_SIZE - CELL_MARGIN}
          style={labelStyles}
        >
          More
        </text>
      </svg>
    </div>
  );
}
