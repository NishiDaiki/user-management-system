"use client";

import UserCard from "./UserCard";
import { User } from "../types/User";
import { useState } from "react";

//インターフェイス定義
export interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  //ユーザーをstate管理
  const [usersList, setUsersList] = useState<User[]>(users);

  //削除後の再レンダリング用関数
  const handleDeleteUser = (id: number) => {
    setUsersList((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <>
      {usersList.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
      ))}
    </>
  );
}
