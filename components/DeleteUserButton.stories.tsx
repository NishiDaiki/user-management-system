import type { Meta, StoryObj } from "@storybook/react";
import DeleteUserButton from "./DeleteUserButton";

//Meta を使ってメタデータを定義
const meta: Meta<typeof DeleteUserButton> = {
  title: "Components/DeleteUserButton",
  component: DeleteUserButton,
};

export default meta;

//StoryObj を使ってストーリーを定義

type Story = StoryObj<typeof DeleteUserButton>;

//デフォルトストーリーに例となるuserIdを設定

export const Default: Story = {
  args: {
    userId: 1,
    onDelete: (id) => console.log("削除イベント発生 userId:", id),
  },
};
