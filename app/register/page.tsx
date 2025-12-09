// app/register/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
const RegisterPage: React.FC = () => {
  const router = useRouter();
  return (
    <Box sx={{ mt: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        新規ユーザー登録
      </Typography>

      <RegisterForm onSuccess={() => router.push("/users")} />
    </Box>
  );
};

export default RegisterPage;
