import React from 'react';

// Continuous background texture inspired by Shipibo-Konibo geometry.
// - Rendered as a seamless tileable SVG pattern to prevent stretching and distortion.
// - Adapts dynamically to light and dark modes using CSS variables.
// - Low opacity for a subtle watermark effect.

export default function BackgroundTextureHome() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="kene-home-pattern"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            {/* Main diamond paths */}
            <path
              d="M 120 40 L 200 120 L 120 200 L 40 120 Z"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 120 70 L 170 120 L 120 170 L 70 120 Z"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Corner diamonds */}
            <path
              d="M 0 40 L 40 0 M 240 40 L 200 0 M 0 200 L 40 240 M 240 200 L 200 240"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Central cross and ornaments */}
            <path
              d="M 120 105 L 120 135 M 105 120 L 135 120"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="120" cy="120" r="3" fill="var(--kene-stroke)" />
            
            <rect x="98" y="98" width="4" height="4" fill="none" stroke="var(--kene-stroke)" strokeWidth="1" />
            <rect x="138" y="98" width="4" height="4" fill="none" stroke="var(--kene-stroke)" strokeWidth="1" />
            <rect x="98" y="138" width="4" height="4" fill="none" stroke="var(--kene-stroke)" strokeWidth="1" />
            <rect x="138" y="138" width="4" height="4" fill="none" stroke="var(--kene-stroke)" strokeWidth="1" />

            {/* Main horizontal/vertical zigzag bands */}
            <path
              d="M 0 120 L 40 120 L 80 80 L 80 40 L 120 0"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 240 120 L 200 120 L 160 80 L 160 40 L 120 0"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 120 240 L 80 200 L 80 160 L 40 120"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 120 240 L 160 200 L 160 160 L 200 120"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Parallel companion lines (thin lines, offset by 8px) */}
            <path
              d="M 0 112 L 36 112 L 72 76 L 72 36 L 108 0"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 240 112 L 204 112 L 168 76 L 168 36 L 132 0"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 108 240 L 72 204 L 72 164 L 36 128 L 0 128"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 132 240 L 168 204 L 168 164 L 204 128 L 240 128"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Traditional hooks (spiral endpoints) */}
            <path
              d="M 120 40 L 120 52 L 114 52"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 120 200 L 120 188 L 126 188"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 40 120 L 52 120 L 52 114"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 200 120 L 188 120 L 188 126"
              fill="none"
              stroke="var(--kene-stroke)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </pattern>
        </defs>
        {/* Draw the repeating pattern across the entire container width and height */}
        <rect width="100%" height="100%" fill="url(#kene-home-pattern)" opacity="0.25" />
      </svg>
    </div>
  );
}
