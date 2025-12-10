import type { Meta, StoryObj } from "@storybook/react";
import { ChatBubble } from "./ChatBubble";

const meta: Meta<typeof ChatBubble> = {
  title: "Components/ChatBubble",
  component: ChatBubble,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChatBubble>;

export const Prompt: Story = {
  args: {
    type: "prompt",
    content: "Explain quantum computing in simple terms.",
    timestamp: new Date(),
  },
};

export const Response: Story = {
  args: {
    type: "response",
    content: "Quantum computing uses quantum mechanical phenomena like superposition and entanglement to perform computations. Unlike classical bits that are either 0 or 1, quantum bits (qubits) can exist in multiple states simultaneously, allowing quantum computers to process vast amounts of information in parallel.",
    timestamp: new Date(),
  },
};

export const LongResponse: Story = {
  args: {
    type: "response",
    content: "This is a longer response that demonstrates how the chat bubble handles multiple lines of text. It should wrap properly and maintain good readability. The component uses whitespace-pre-wrap to preserve formatting while allowing text to flow naturally within the container.",
    timestamp: new Date(),
  },
};

