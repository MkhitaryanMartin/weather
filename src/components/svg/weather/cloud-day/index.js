import React from "react";

function CloudDayIcon() {
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
        <g transform="translate(20 10) translate(0 16)">
          <g className="am-weather-sun">
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="translate(0 9)"
            ></path>
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(45) translate(0 9)"
            ></path>
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(90) translate(0 9)"
            ></path>
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(135) translate(0 9)"
            ></path>
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(180) translate(0 9)"
            ></path>
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(225) translate(0 9)"
            ></path>
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(270) translate(0 9)"
            ></path>
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(315) translate(0 9)"
            ></path>
          </g>
          <circle r="5" fill="orange" stroke="orange" strokeWidth="2"></circle>
        </g>
        <path
          fill="#C6DEFF"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
          className="0"
        ></path>
      </g>
    </svg>
  );
}

export default CloudDayIcon;