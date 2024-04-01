import React from "react";

function SunIcon() {
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
        <g transform="translate(32 32)">
          <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
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
      </g>
    </svg>
  );
}

export default SunIcon;
