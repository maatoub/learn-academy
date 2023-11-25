import React from "react";

function ThreeRectangles() {
  return (
    <div>
      <svg className="mt-4" width="300" height="30">
        <rect x="114" width="45" height="12" rx="6" fill="#FFCC00" />
        <rect x="57" width="45" height="12" rx="6" fill="#DD0000"></rect>
        <rect width="45" height="12" rx="6" fill="#231F20"></rect>
      </svg>
    </div>
  );
}

export default ThreeRectangles;
