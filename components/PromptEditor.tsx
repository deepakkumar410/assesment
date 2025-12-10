"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "@/contexts/FormContext";

interface Template {
  id: string;
  name: string;
  content: string;
}

export function PromptEditor() {
  const { prompt, setPrompt } = useForm();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showTemplateMenu, setShowTemplateMenu] = useState(false);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/templates");
      if (!response.ok) throw new Error("Failed to fetch templates");
      const data = await response.json();
      
      // Merge with user-saved templates from localStorage
      const savedTemplates = localStorage.getItem("templates");
      const userTemplates = savedTemplates ? JSON.parse(savedTemplates) : [];
      setTemplates([...data, ...userTemplates]);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const saveTemplate = () => {
    if (!prompt.trim()) return;
    const templateName = prompt.slice(0, 30) + (prompt.length > 30 ? "..." : "");
    const newTemplate: Template = {
      id: Date.now().toString(),
      name: templateName,
      content: prompt,
    };
    // In a real app, this would save to the API
    setTemplates((prev) => {
      const updated = [...prev, newTemplate];
      localStorage.setItem("templates", JSON.stringify(updated));
      return updated;
    });
  };

  const loadTemplate = (template: Template) => {
    setPrompt(template.content);
    setShowTemplateMenu(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <label
          htmlFor="prompt-editor"
          className="block text-sm font-semibold text-text-primary-light dark:text-text-primary-dark"
        >
          Prompt Editor
        </label>
        <div className="flex gap-2">
          <div className="relative">
            <button
              onClick={() => setShowTemplateMenu(!showTemplateMenu)}
              className="px-4 py-2 text-sm bg-primary-500 hover:bg-primary-600 text-white rounded-lg focus-ring transition-colors"
              aria-label="Load template"
              aria-expanded={showTemplateMenu}
            >
              Load Template
            </button>
            {showTemplateMenu && templates.length > 0 && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => loadTemplate(template)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-text-primary-light dark:text-text-primary-dark focus-ring"
                  >
                    {template.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={saveTemplate}
            disabled={!prompt.trim()}
            className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-text-primary-light dark:text-text-primary-dark rounded-lg focus-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Save template"
          >
            Save Template
          </button>
        </div>
      </div>
      <textarea
        id="prompt-editor"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        rows={8}
        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus-ring text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark resize-none transition-all hover:border-primary-400 dark:hover:border-primary-500"
        aria-label="Prompt input"
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">Error: {error}</p>
      )}
    </motion.div>
  );
}

