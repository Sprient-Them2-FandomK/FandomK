const RadioOnSvg = ({ size = "16px", color = "#F96D69" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="8" fill={color} />
      <circle cx="8" cy="8" r="5.5" fill={color} stroke="white" strokeWidth="3" />
    </svg>
  );
};

export default RadioOnSvg;
