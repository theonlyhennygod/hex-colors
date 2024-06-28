"use client";

import { useState } from "react";
import colorOptions from "@/data/colors";
import { hslaToRgba, rgbaToHex } from "@/lib/helpers";

const Hero = () => {
  const [hslValues, setHslValues] = useState({ h: 0, s: 0, l: 50, a: 1 });
  const [colorScales, setColorScales] = useState(colorOptions[0].shades);

  const handleHSLChange = (e, colorProperty) => {
    const newValue =
      colorProperty === "a"
        ? parseFloat(e.target.value)
        : parseInt(e.target.value, 10);
    const newHslValues = { ...hslValues, [colorProperty]: newValue };
    setHslValues(newHslValues);
  };

  const handleColorChange = (e) => {
    const selectedColor = colorOptions.find(
      (color) => color.name === e.target.value
    );
    setColorScales(selectedColor.shades);
  };

  const handleCopy = () => {
    const [r, g, b, a] = hslaToRgba(
      hslValues.h,
      hslValues.s,
      hslValues.l,
      hslValues.a
    );
    const hexCode = rgbaToHex(r, g, b, a);
    navigator.clipboard.writeText(hexCode);
    alert("HEX code copied to clipboard: " + hexCode);
  };

  return (
    <div
      className="flex flex-col justify-center items-center text-center p-10 h-screen"
      style={{
        backgroundColor: `hsl(${hslValues.h}, ${hslValues.s}%, ${hslValues.l}%)`,
      }}
    >
      <h1 className="text-4xl font-bold mb-16 text-white">
        HEX Color Generator
      </h1>
      <p className="mb-24 text-white">
        Use the sliders to adjust the HSL values and generate a HEX color code.
      </p>
      <div className="flex space-x-4 mb-4">
        <input
          type="range"
          min="0"
          max="360"
          value={hslValues.h}
          onChange={(e) => handleHSLChange(e, "h")}
          className="w-full max-w-xs" // Adjusted for Tailwind styling
        />
        <input
          type="range"
          min="0"
          max="100"
          value={hslValues.s}
          onChange={(e) => handleHSLChange(e, "s")}
          className="w-full max-w-xs" // Assuming you add sliders for S and L
        />
        <input
          type="range"
          min="0"
          max="100"
          value={hslValues.l}
          onChange={(e) => handleHSLChange(e, "l")}
          className="w-full max-w-xs" // Assuming you add sliders for S and L
        />
      </div>
      <button
        onClick={handleCopy}
        className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
      >
        Copy Color
      </button>
    </div>
  );
};

export default Hero;
