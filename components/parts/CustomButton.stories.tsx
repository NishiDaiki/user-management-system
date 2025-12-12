// components/parts/CustomButton.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof CustomButton> = {
  title: "Components/Parts/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
};

//メタデータのエクスポート
export default meta;

//ストーリー型定義
type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    variantType: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variantType: "secondary",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variantType: "danger",
    children: "Danger Button",
  },
};

//グラデーションボタン
export const Gradient: Story = {
  args: {
    children: "グラデーションボタン",
    variant: "contained",
    sx: {
      background: "linear-gradient(45deg, #6a5acd, #00bfff)",
      color: "#fff",
    },
  },
};

//ホバー時に色が変わるボタン
export const HoverChane: Story = {
  args: {
    children: "ホバーで色変化",
    variant: "contained",
    sx: {
      backgroundColor: "#1976b2", //ホバー前色
      color: "#fff",
      transition: "0.3s ease", //色変化までの時間
      "&:hover": {
        backgroundColor: "#ff9800", //ホバー時の色　オレンジ
      },
    },
  },
};

//ローディングボタン
export const loadingButton: Story = {
  args: {
    children: "クリック",
    variant: "contained",
  },

  //Storybook 上で「Button を押した時の動作」を再現
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = (await canvas.getByRole("button")) as HTMLButtonElement;

    button.addEventListener("click", async () => {
      if (button.disabled) return;
      //クリックしたら即ローディング状態に切り替える
      button.disabled = true;
      button.innerText = "Loading...";

      //2秒後にローディング解除
      await new Promise((resolve) => setTimeout(resolve, 2000));

      button.disabled = false;
      button.innerText = "完了";
    });
  },
};
