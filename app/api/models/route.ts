import { NextResponse } from "next/server";

export async function GET() {
  // Mock API - returns dummy model data
  const models = [
    {
      id: "gpt-3.5-turbo",
      name: "GPT-3.5 Turbo",
      description: "Fast and efficient model for most tasks",
    },
    {
      id: "gpt-4",
      name: "GPT-4",
      description: "Most capable model with advanced reasoning",
    },
    {
      id: "gpt-4-turbo",
      name: "GPT-4 Turbo",
      description: "Enhanced version of GPT-4 with improved performance",
    },
    {
      id: "claude-3-opus",
      name: "Claude 3 Opus",
      description: "Anthropic's most powerful model",
    },
    {
      id: "claude-3-sonnet",
      name: "Claude 3 Sonnet",
      description: "Balanced performance and speed",
    },
    {
      id: "custom-model",
      name: "Custom Model",
      description: "Your custom fine-tuned model",
    },
  ];

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(models);
}

