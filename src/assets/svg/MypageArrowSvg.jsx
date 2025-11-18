const MypageArrow = ({
  width = 8,
  height = 14,
  strokeColor = "white",
  strokeWidth = 2,
  strokeLinecap = "round",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        d="M6.58582 1L1.29292 6.29289C0.902398 6.68342 0.902398 7.31658 1.29292 7.70711L6.58582 13"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
      />
    </svg>
  );
};

export default MypageArrow;
