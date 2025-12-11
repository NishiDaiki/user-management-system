import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { User } from "../types/User";
import CustomButton from "./parts/CustomButton";
import { softDeleteUser } from "@/utils/api";

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const handleDlete = async () => {
    //削除確認モーダル
    const ok = confirm("ホントにこのユーザーを削除しますか？");

    if (!ok) return;

    try {
      await softDeleteUser(user.id);
      onDelete(user.id);
    } catch (error) {
      console.error("削除に失敗:", error);
    }
  };
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography variant="body2">役割: {user.role}</Typography>
      </CardContent>
      <CardActions>
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
          onClick={handleDlete}
        >
          削除
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
