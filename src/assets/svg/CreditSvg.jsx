const CreditSvg = ({ size = "28px" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2.5 0 25.5 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.5 14L11.5 11L13.5 14L11.5 17L9.5 14Z" fill="white" />
      <g filter="url(#filter0_d_22437_4056)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 6L17 13.8741L11.5 21.7205L6 13.8741L11.5 6ZM7.20385 13.8731L11.5 20.002L15.7961 13.8731L11.5 7.72248L7.20385 13.8731Z"
          fill="url(#paint0_linear_22437_4056)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_22437_4056"
          x="0"
          y="0"
          width="23"
          height="27.7207"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22437_4056" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_22437_4056"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_22437_4056"
          x1="11.5"
          y1="6"
          x2="11.5"
          y2="21.7205"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8282" />
          <stop offset="1" stopColor="#F96969" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CreditSvg;
