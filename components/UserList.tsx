"use client";

import { User } from "../types/User";
import { useState } from "react";
import CustomCard from "./parts/CustomCard";
import { Button } from "@mui/material";
import Link from "next/link";
import CustomButton from "./parts/CustomButton";
import { softDeleteUser } from "@/utils/api";

//インターフェイス定義
export interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  //ユーザーをstate管理
  const [usersList, setUsersList] = useState<User[]>(users);

  //削除後の再レンダリング用関数
  const handleDeleteUser = async (id: number) => {
    const ok = confirm("ホントにこのユーザーを削除しますか？");

    if (!ok) return;

    try {
      await softDeleteUser(id);
      setUsersList((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.error("削除に失敗:", error);
    }
  };

  return (
    <>
      {usersList.map((user) => (
        <CustomCard
          key={user.id}
          title={user.name}
          description={
            <>
              {user.email}
              <br />
              役割: {user.role}
            </>
          }
          actions={
            <>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                component={Link}
                href={`/users/${user.id}/details`}
              >
                詳細
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                component={Link}
                href={`/users/${user.id}/edit`}
              >
                編集
              </Button>
              <CustomButton
                variantType="danger"
                variant="outlined"
                size="small"
                onClick={() => handleDeleteUser(user.id)}
              >
                削除
              </CustomButton>
            </>
          }
        />
      ))}
    </>
  );
}
