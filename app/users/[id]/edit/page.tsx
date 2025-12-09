// app/users/[id]/edit/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import EditUserForm from "../../../../components/EditUserForm";
import { useParams } from "next/navigation";
import { Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

// TODO: URLパラメータからユーザーIDを取得し、EditUserFormコンポーネントに渡す
const EditUserPage: React.FC = () => {
  //URLパラメーター取得
  const { id } = useParams();
  //画面遷移
  const router = useRouter();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>

      <EditUserForm
        userId={String(id)}
        onSuccess={() => router.push("/users")}
        onError={(error) => alert(`エラー: ${error}`)}
      />
    </Box>
  );
};

export default EditUserPage;
