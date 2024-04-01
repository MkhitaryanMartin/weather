import React from "react";

function MoonIcon() {
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
          fill="orange"
          strokeMiterlimit="10"
          className="0"
          d="M3.3 1.5L4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7z"
          transform="translate(20 20)"
        ></path>
        <path
          fill="orange"
          strokeMiterlimit="10"
          transform="translate(20 20) translate(20 10)"
          className="0"
          d="M3.3 1.5L4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7z"
        ></path>
        <path
          fill="orange"
          stroke="orange"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z"
          transform="translate(20 20)"
          className="0"
        ></path>
      </g>
    </svg>
  );
}

export default MoonIcon;