import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

/**
 * Calculates the position of a cell in a grid based on the provided parameters.
 *
 * @param {Object} options - The options object containing the parameters.
 * @param {number} options.xLabelWidth - The width of the x-axis label.
 * @param {number} options.yLabelHeight - The height of the y-axis label.
 * @param {number} options.cellSize - The size of each cell.
 * @param {number} options.cellMargin - The margin between cells.
 * @param {number} options.x - The x index.
 * @param {number} options.y - The y index.
 * @returns {Object} - The computed position of the cell as an object with 'x' and 'y' properties.
 */
export const getCellPosition = ({
  xLabelWidth,
  yLabelHeight,
  cellSize,
  cellMargin,
  x,
  y,
}) => {
  const bounds = cellSize + cellMargin;

  return {
    x: xLabelWidth + bounds * x,
    y: yLabelHeight + bounds * y,
  };
};

/**
 * Creates an array of SVG rect elements based on the provided data.
 *
 * @param {Object} options - The options object.
 * @param {Array} options.weeks - The array of week data.
 * @param {Function} options.getCellPosition - The function to get the position of rect.
 * @param {number} options.cellSize - The size of each rectangle.
 * @param {Function} options.getRectColor - The function to get the color of rect.
 * @returns {Array} - The array of SVG rect elements.
 */
export const createCells = ({
  weeks,
  getCellPosition,
  cellSize,
  getRectColor,
  styleProps,
}) => {
  const rects = [];

  for (let w = 0; w < weeks.length; w++) {
    const weekDays = weeks[w].contributionDays;

    for (let d = 0; d < weekDays.length; d++) {
      const data = weekDays[d];

      const pos = getCellPosition({ x: w, y: d });

      const color = getRectColor(data);

      rects.push(
        <rect
          key={`cell-key-${w}-${d}`}
          x={pos.x}
          y={pos.y}
          width={cellSize}
          height={cellSize}
          fill={color}
          data-level={data.contributionLevel}
          data-date={data.date}
          rx={3}
          ry={3}
          style={{ ...styleProps }}
        >
          <title>
            {data.contributionCount} contributions on{' '}
            {dayjs(data.date).format('MMMM Do')}.
          </title>
        </rect>
      );
    }
  }

  return rects;
};

export const createMonthLabels = ({ months, getLabelPosition, styleProps }) => {
  const texts = [];

  for (let i = 0; i < months.length; i++) {
    const data = months[i];

    if (data.totalWeeks <= 3) continue;

    const prevMonthTotalWeeks =
      i === 0
        ? 0
        : months[i - 1].totalWeeks <= 3
        ? 0
        : months[i - 1].totalWeeks;

    const { x, y } = getLabelPosition({ x: prevMonthTotalWeeks, y: 0 });

    texts.push(
      <text
        key={`month-key-${i}`}
        style={{ ...styleProps }}
        dominantBaseline="end"
        x={x}
        y={y}
      >
        {data.name}
      </text>
    );
  }

  return texts;
};

export const createWeekLabels = ({
  weekNames,
  getLabelPosition,
  styleProps,
}) => {
  const texts = [];

  for (let i = 0; i < weekNames.length; i++) {
    const { x, y } = getLabelPosition({ x: 0, y: i });

    texts.push(
      <text
        key={`week-key-${i}`}
        style={{ ...styleProps }}
        x={x}
        y={y}
        dominantBaseline="middle"
        textAnchor="end"
      >
        {weekNames[i]}
      </text>
    );
  }

  return texts;
};
