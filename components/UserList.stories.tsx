import type { Meta, StoryObj } from "@storybook/react";
import UserList from "./UserList";
import { User } from "../types/User";

//メタデータを定義
const meta: Meta<typeof UserList> = {
  title: "Components/UserList",
  component: UserList,
};

export default meta;

const sampleUsers: User[] = [
  {
    id: 1,
    name: "テスト西",
    email: "nishi@gmail.com",
    role: "新人",
    deleted: false,
  },
  {
    id: 2,
    name: "テスト大樹",
    email: "daiki@gmail.com",
    role: "一般",
    deleted: false,
  },
];

//StoryObj を使⽤してストーリーを定義
type Story = StoryObj<typeof UserList>;

export const Default: Story = {
  args: {
    users: sampleUsers,
  },
};
