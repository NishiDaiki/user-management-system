// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";
import { User } from "../types/User";

//インターフェイスの定義
export interface EditUserFormProps {
  userId: string;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

// 必要に応じて利用する
interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

// TODO: ユーザー編集フォームコンポーネントを実装する
const EditUserForm: React.FC<EditUserFormProps> = ({
  userId,
  onSuccess,
  onError,
}) => {
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditUserFormInputs>();

  //登録済みユーザー取得処理
  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await fetchUserById(Number(userId));
        if (!user) {
          alert("ユーザーが見つかりませんでした。");
          return;
        }

        setValue("name", user.name);
        setValue("email", user.email);
        setValue("role", user.role);
      } catch (error) {
        console.error(error);
        onError?.(error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [userId, setValue, onError]);

  //更新処理
  const onSubmit = async (data: EditUserFormInputs) => {
    try {
      await updateUser(Number(userId), data);
      onSuccess?.();
    } catch (error) {
      console.error(error);
      onError?.(error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="名前"
          fullWidth
          margin="normal"
          {...register("name", { required: "名前は必須です" })}
          helperText={errors.name?.message}
        />
        <TextField
          label="メール"
          fullWidth
          margin="normal"
          {...register("email", { required: "メールは必須です" })}
          helperText={errors.email?.message}
        />
        <TextField
          label="役職"
          fullWidth
          margin="normal"
          {...register("role", { required: "役職は必須です" })}
          helperText={errors.role?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          更新
        </Button>
      </form>
    </Box>
  );
};

export default EditUserForm;
