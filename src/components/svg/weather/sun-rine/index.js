import React from "react";

function SunRainIcon() {
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
        <g transform="translate(20 10) matrix(1.2 0 0 1.2 0 16)">
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
          fill="#57A0EE"
          stroke="#FFF"
          strokeLinejoin="round"
          strokeWidth="1.275"
          d="M25.545 25.09c0-3.91-3.145-6.97-6.97-6.97-.85 0-1.615.17-2.38.425-.255-2.89-2.635-5.27-5.61-5.27A5.695 5.695 0 004.89 18.97c0 .68.17 1.36.34 1.955-.255-.085-.595-.085-.85-.085a5.695 5.695 0 00-5.695 5.695c0 3.06 2.465 5.61 5.525 5.695h14.62c3.74-.425 6.715-3.4 6.715-7.14z"
          transform="translate(20 10)"
        ></path>
        <g transform="rotate(10 -245.891 217.31)">
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(-6 1)"
          ></path>
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-2"
            transform="translate(0 -1)"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default SunRainIcon;
