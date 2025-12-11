"use client";

import { User } from "../types/User";
import { useState } from "react";
import CustomCard from "./parts/CustomCard";
import { Button } from "@mui/material";
import Link from "next/link";
import CustomButton from "./parts/CustomButton";
import { softDeleteUser } from "@/utils/api";
import CustomModal from "./parts/CustomModal";

//インターフェイス定義
export interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  //ユーザーをstate管理
  const [usersList, setUsersList] = useState<User[]>(users);

  //モーダル開閉するためのstate管理
  const [open, setOpen] = useState(false);

  const [selectedId, setSlectedId] = useState<number | null>(null);

  //削除処理
  const handleDeleteUser = async () => {
    if (selectedId == null) return;

    try {
      await softDeleteUser(selectedId);
      setUsersList((prev) => prev.filter((user) => user.id !== selectedId));
    } catch (error) {
      console.error("削除に失敗:", error);
    } finally {
      setOpen(false);
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
                onClick={() => {
                  setSlectedId(user.id);
                  setOpen(true);
                }}
              >
                削除
              </CustomButton>
            </>
          }
        />
      ))}
      <CustomModal
        open={open}
        title="削除確認"
        content="本当にこのユーザーを削除しますか？"
        onClose={() => setOpen(false)}
        onConfirm={handleDeleteUser}
      ></CustomModal>
    </>
  );
}
