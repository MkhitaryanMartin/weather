import React from "react";

function ThunderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <defs>
        <filter id="blur" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
          <feOffset dy="4" result="offsetblur"></feOffset>
          <feComponentTransfer>
            <feFuncA slope="0.05" type="linear"></feFuncA>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#blur)">
        <path
          fill="#91C0F8"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="0.72"
          d="M18.62 15.24c0-2.76-2.22-4.92-4.92-4.92-.6 0-1.14.12-1.68.3-.18-2.04-1.86-3.72-3.96-3.72a4.02 4.02 0 00-4.02 4.02c0 .48.12.96.24 1.38-.18-.06-.42-.06-.6-.06a4.02 4.02 0 00-4.02 4.02c0 2.16 1.74 3.96 3.9 4.02h10.32c2.64-.3 4.74-2.4 4.74-5.04z"
          transform="translate(20 10)"
          className="0"
        ></path>
        <path
          fill="#57A0EE"
          stroke="#FFF"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        ></path>
        <path
          fill="orange"
          stroke="#fff"
          d="M14.3 -2.9L20.5 -2.9 16.4 4.3 20.3 4.3 11.5 14.6 14.9 6.9 11.1 6.9z"
          className="am-weather-stroke"
          transform="translate(20 10) matrix(1.2 0 0 1.2 -9 28)"
        ></path>
      </g>
    </svg>
  );
}

export default ThunderIcon;
