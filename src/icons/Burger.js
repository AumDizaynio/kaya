import * as React from "react";
const Burger = (props) => (
  <svg
    viewBox="0 0 24.00 24.00"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
    stroke="#000000"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCCCCC"
      strokeWidth={0.048}
    />
    <g id="SVGRepo_iconCarrier">
      <path
        d="M4 7L7 7M20 7L11 7"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M20 17H17M4 17L13 17"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M4 12H7L20 12"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </g>
  </svg>
);
export default Burger;
