// components/RegisterForm.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { createUser } from "../utils/api";

// 必要に応じて利用する
interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

//インターフェイスの定義
interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
  disabled?: boolean;
}

// TODO: 新規登録フォームコンポーネントを実装する
const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onError }) => {
  // 必要に応じて利用する
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>();

  //送信処理
  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      await createUser(data);
      reset();
      onSuccess?.();
    } catch (error) {
      console.error(error);
      onError?.(error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        新規登録
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="名前"
          {...register("name", { required: "名前は必須です" })}
          helperText={errors.name?.message}
        />
        <TextField
          label="メール"
          {...register("email", { required: "メールは必須です" })}
          helperText={errors.email?.message}
        />
        <TextField
          label="役職"
          {...register("role", { required: "役職は必須です" })}
          helperText={errors.role?.message}
        />

        <Button type="submit" variant="contained" color="primary">
          登録
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
