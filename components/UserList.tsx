"use client";

import { Typography } from "@mui/material";
import UserCard from "./UserCard";
import { User } from "../types/User";

//インターフェイス定義
export interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        ユーザー一覧
      </Typography>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}
