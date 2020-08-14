import React from "react";

const Svg = (props) => {
  const {classIcon, color, icon, width, height, click} = props;

  return (
    <div>
      <svg
        onClick={click}
        className={`${classIcon ? classIcon : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        height={`${height ? height : "70"}`}
        viewBox="0 -5 24 24"
        width={`${width ? width : "40"}`}>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path stroke={`${color ? color : "white"}`} strokeWidth="1" d={icon} />
      </svg>
    </div>
  );
};

export default Svg;
