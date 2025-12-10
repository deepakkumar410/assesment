"use client";

import { motion } from "framer-motion";

interface SliderProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  displayValue?: string;
}

export function Slider({
  id,
  label,
  value,
  min,
  max,
  step,
  onChange,
  displayValue,
}: SliderProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label
          htmlFor={id}
          className="text-sm text-text-primary-light dark:text-text-primary-dark"
        >
          {label}
        </label>
        <span className="text-sm font-mono text-text-secondary-light dark:text-text-secondary-dark">
          {displayValue ?? value.toFixed(2)}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500 focus-ring"
        aria-label={label}
      />
    </div>
  );
}

