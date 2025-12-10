import React from "react";
import { softDeleteUser } from "@/utils/api";
import { Button } from "@mui/material";

//インターフェイス定義
interface DeleteUserButtonProps {
  userId: number;
  onDelete: (id: number) => void;
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({
  userId,
  onDelete,
}) => {
  const handleDlete = async () => {
    //削除確認モーダル
    const ok = confirm("ホントにこのユーザーを削除しますか？");

    if (!ok) return;

    try {
      await softDeleteUser(userId);
      onDelete(userId);
    } catch (error) {
      console.error("削除に失敗:", error);
    }
  };

  return (
    <Button onClick={handleDlete} variant="contained" color="error">
      削除
    </Button>
  );
};

export default DeleteUserButton;
