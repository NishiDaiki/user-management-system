import type { Meta, StoryObj } from "@storybook/react";
import UserDetails from "./UserDetails";

//Meta を使ってメタデータを定義
const meta: Meta<typeof UserDetails> = {
  title: "Components/UserDetails",
  component: UserDetails,
};

export default meta;

//StoryObj を使ってストーリーを定義

type Story = StoryObj<typeof UserDetails>;

//デフォルトストーリーに例となるuserIdを設定

export const Default: Story = {
  args: {
    user: {
      id: 1,
      name: "詳細テスト（西）",
      email: "details@gmail.com",
      role: "管理者",
      deleted: false,
    },
  },
};
