import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Slider>;

const SliderWrapper = (args: any) => {
  const [value, setValue] = useState(args.value);
  return <Slider {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: SliderWrapper,
  args: {
    id: "temperature",
    label: "Temperature",
    value: 0.7,
    min: 0,
    max: 2,
    step: 0.1,
  },
};

export const MaxTokens: Story = {
  render: SliderWrapper,
  args: {
    id: "max-tokens",
    label: "Max Tokens",
    value: 1000,
    min: 1,
    max: 4000,
    step: 100,
    displayValue: "1000",
  },
};

