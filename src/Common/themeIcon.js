const ThemeIcon = (props) => {
  return (
    <svg
      viewBox="0 0 72 72"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill={props.primary} d="M36,45 v-36 a28,28 0 0 0 0 56 z" />
        <path fill={props.secondary} d="M36,45 v-36 a28,28 0 0 1 0 56 z" />
      </g>
      <g>
        <circle
          cx="36"
          cy="36"
          r="30"
          fill="none"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="5"
        />
      </g>
    </svg>
  );
};

export default ThemeIcon;
