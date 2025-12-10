"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "@/contexts/FormContext";

interface Model {
  id: string;
  name: string;
  description: string;
}

export function ModelSelector() {
  const { selectedModel, setSelectedModel } = useForm();
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/models");
      if (!response.ok) throw new Error("Failed to fetch models");
      const data = await response.json();
      setModels(data);
      if (data.length > 0) {
        setSelectedModel(data[0].id);
      }
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-red-200 dark:border-red-800">
        <p className="text-red-600 dark:text-red-400">Error: {error}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <label
        htmlFor="model-select"
        className="block text-sm font-semibold mb-3 text-text-primary-light dark:text-text-primary-dark"
      >
        Select Model
      </label>
      <select
        id="model-select"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
        className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus-ring text-text-primary-light dark:text-text-primary-dark transition-all hover:border-primary-400 dark:hover:border-primary-500"
        aria-label="Select AI model"
      >
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
      {selectedModel && (
        <p className="mt-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
          {models.find((m) => m.id === selectedModel)?.description}
        </p>
      )}
    </motion.div>
  );
}

