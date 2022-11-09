import Svg, { Path } from "react-native-svg";

export const RightArrow = () => (
  <Svg width={25} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M4.25 12h16.5M14 5.25 20.75 12 14 18.75"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Heart = () => (
  <Svg width={32} height={33} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      opacity={0.2}
      d="M16 27.5S3.5 20.5 3.5 12A6.5 6.5 0 0 1 16 9.5 6.5 6.5 0 0 1 28.5 12c0 8.5-12.5 15.5-12.5 15.5Z"
      fill="#1249CB"
    />
    <Path
      d="M16 27.5S3.5 20.5 3.5 12A6.5 6.5 0 0 1 16 9.5v0A6.5 6.5 0 0 1 28.5 12c0 8.5-12.5 15.5-12.5 15.5Z"
      stroke="#1249CB"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Handshake = () => (
  <Svg width={32} height={33} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      opacity={0.2}
      d="m25 19.613-4.6 4.6a1.062 1.062 0 0 1-.95.262l-7.25-1.813a1 1 0 0 1-.362-.187L5 17.137l4.075-7.662L15.488 7.6a1 1 0 0 1 .687.05L20.5 9.613h-2.587a.987.987 0 0 0-.7.287l-4.9 4.887a1.014 1.014 0 0 0 .112 1.513l.675.512a4.012 4.012 0 0 0 4.8 0l1.6-1.2 5.5 4Z"
      fill="#1249CB"
    />
    <Path
      d="M30.087 15.725 27 17.263l-4-7.65 3.125-1.563a.988.988 0 0 1 1.325.425l3.075 5.888a.999.999 0 0 1-.438 1.362v0ZM5 17.137l-3.087-1.55a.987.987 0 0 1-.438-1.35L4.55 8.35a1 1 0 0 1 1.325-.438L9 9.475l-4 7.662Z"
      stroke="#1249CB"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m27 17.262-2 2.35-4.6 4.6a1.063 1.063 0 0 1-.95.263l-7.25-1.813a1.003 1.003 0 0 1-.362-.187L5 17.137"
      stroke="#1249CB"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m25 19.613-5.5-4-1.6 1.2a4.013 4.013 0 0 1-4.8 0l-.675-.513a1.015 1.015 0 0 1-.112-1.512l4.9-4.888a.988.988 0 0 1 .7-.287H23"
      stroke="#1249CB"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.075 9.475 15.488 7.6a1 1 0 0 1 .687.05L20.5 9.613M14 27.113l-3.762-.95a.925.925 0 0 1-.413-.213L7 23.5"
      stroke="#1249CB"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
