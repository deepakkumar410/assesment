"use client";

import { motion } from "framer-motion";
import { useForm } from "@/contexts/FormContext";

export function ParametersPanel() {
  const { parameters, setParameters } = useForm();

  const updateParameter = (key: keyof typeof parameters, value: number) => {
    setParameters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <h2 className="text-sm font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">
        Parameters
      </h2>
      <div className="space-y-6">
        {/* Temperature */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="temperature"
              className="text-sm text-text-primary-light dark:text-text-primary-dark"
            >
              Temperature
            </label>
            <span className="text-sm font-mono text-text-secondary-light dark:text-text-secondary-dark">
              {parameters.temperature.toFixed(2)}
            </span>
          </div>
          <input
            id="temperature"
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={parameters.temperature}
            onChange={(e) => updateParameter("temperature", parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500 focus-ring"
            aria-label="Temperature slider"
          />
        </div>

        {/* Max Tokens */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="max-tokens"
              className="text-sm text-text-primary-light dark:text-text-primary-dark"
            >
              Max Tokens
            </label>
            <span className="text-sm font-mono text-text-secondary-light dark:text-text-secondary-dark">
              {parameters.maxTokens}
            </span>
          </div>
          <input
            id="max-tokens"
            type="range"
            min="1"
            max="4000"
            step="100"
            value={parameters.maxTokens}
            onChange={(e) => updateParameter("maxTokens", parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500 focus-ring"
            aria-label="Max tokens slider"
          />
        </div>

        {/* Top P */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="top-p"
              className="text-sm text-text-primary-light dark:text-text-primary-dark"
            >
              Top P
            </label>
            <span className="text-sm font-mono text-text-secondary-light dark:text-text-secondary-dark">
              {parameters.topP.toFixed(2)}
            </span>
          </div>
          <input
            id="top-p"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={parameters.topP}
            onChange={(e) => updateParameter("topP", parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500 focus-ring"
            aria-label="Top P slider"
          />
        </div>

        {/* Frequency Penalty */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="frequency-penalty"
              className="text-sm text-text-primary-light dark:text-text-primary-dark"
            >
              Frequency Penalty
            </label>
            <span className="text-sm font-mono text-text-secondary-light dark:text-text-secondary-dark">
              {parameters.frequencyPenalty.toFixed(2)}
            </span>
          </div>
          <input
            id="frequency-penalty"
            type="range"
            min="-2"
            max="2"
            step="0.1"
            value={parameters.frequencyPenalty}
            onChange={(e) => updateParameter("frequencyPenalty", parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500 focus-ring"
            aria-label="Frequency penalty slider"
          />
        </div>

        {/* Presence Penalty */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="presence-penalty"
              className="text-sm text-text-primary-light dark:text-text-primary-dark"
            >
              Presence Penalty
            </label>
            <span className="text-sm font-mono text-text-secondary-light dark:text-text-secondary-dark">
              {parameters.presencePenalty.toFixed(2)}
            </span>
          </div>
          <input
            id="presence-penalty"
            type="range"
            min="-2"
            max="2"
            step="0.1"
            value={parameters.presencePenalty}
            onChange={(e) => updateParameter("presencePenalty", parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500 focus-ring"
            aria-label="Presence penalty slider"
          />
        </div>
      </div>
    </motion.div>
  );
}

