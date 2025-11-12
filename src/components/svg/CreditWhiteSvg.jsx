const CreditWhite = ({ size = "25px" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.84375 12.5L10.4688 10.0625L12.0938 12.5L10.4688 14.9375L8.84375 12.5Z"
        fill="white"
      />
      <g filter="url(#filter0_d_22437_4090)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4687 6L14.9375 12.3977L10.4687 18.7729L6 12.3977L10.4687 6ZM6.97813 12.3969L10.4687 17.3766L13.9594 12.3969L10.4687 7.39952L6.97813 12.3969Z"
          fill="url(#paint0_linear_22437_4090)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_22437_4090"
          x="0"
          y="0"
          width="20.9375"
          height="24.7729"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22437_4090" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_22437_4090"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_22437_4090"
          x1="10.4688"
          y1="6"
          x2="10.4688"
          y2="18.7729"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CreditWhite;
