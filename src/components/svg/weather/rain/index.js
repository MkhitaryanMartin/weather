import React from "react";

function RainIcon() {
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
          fill="#57A0EE"
          stroke="#FFF"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        ></path>
        <g transform="rotate(10 -247.391 200.166)">
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="0.1,7"
            strokeLinecap="round"
            strokeWidth="3"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(-5 1)"
          ></path>
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="0.1,7"
            strokeLinecap="round"
            strokeWidth="3"
            d="M0 0L0 8"
            className="am-weather-rain-2"
            transform="translate(0 -1)"
          ></path>
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="0.1,7"
            strokeLinecap="round"
            strokeWidth="3"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(5)"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default RainIcon;
