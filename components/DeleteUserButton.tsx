import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomModal from "./parts/CustomModal";

//インターフェイス定義
interface DeleteUserButtonProps {
  userId: number;
  onDelete: (id: number) => void;
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({
  userId,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" color="error">
        削除
      </Button>

      <CustomModal
        open={open}
        title="削除確認"
        content="本当にこのユーザーを削除しますか？"
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
      ></CustomModal>
    </>
  );
};

export default DeleteUserButton;
