import React from "react";
import { fetchUserById } from "@/utils/api";
import UserDetails from "@/components/UserDetails";
import { Container, Typography } from "@mui/material";

//インターフェイスの定義
interface UserDetailsPageProps {
  params: {
    id: string;
  };
}

const UserDetailsPage = async ({ params }: UserDetailsPageProps) => {
  const id = Number(params.id);

  //ユーザー情報を取得
  const user = await fetchUserById(id);

  //ユーザー存在しない場合
  if (!user) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" color="error">
          ユーザーが見つかりませんでした。
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        ユーザー詳細
      </Typography>
      <UserDetails user={user} />
    </Container>
  );
};
export default UserDetailsPage;
