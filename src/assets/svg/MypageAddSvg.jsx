const MypageAdd = ({ size = 24, strokeColor = "white", strokeWidth = 2 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M12 5V19" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M19 12L5 12" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
};

export default MypageAdd;
