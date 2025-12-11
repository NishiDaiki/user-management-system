import React from "react";
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
  return (
    <Button variant="outlined" color="error">
      削除
    </Button>
  );
};

export default DeleteUserButton;
