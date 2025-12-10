import { NextResponse } from "next/server";

export async function GET() {
  // Mock API - returns dummy template data
  const templates = [
    {
      id: "1",
      name: "Code Explanation",
      content: "Explain the following code snippet in detail:\n\n",
    },
    {
      id: "2",
      name: "Creative Writing",
      content: "Write a creative story about:\n\n",
    },
    {
      id: "3",
      name: "Code Review",
      content: "Review the following code and suggest improvements:\n\n",
    },
    {
      id: "4",
      name: "Summarize",
      content: "Summarize the following text:\n\n",
    },
  ];

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json(templates);
}

