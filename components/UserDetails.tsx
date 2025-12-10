import React from "react";
import { User } from "../types/User";
import { Card, CardContent, Typography } from "@mui/material";

//インターフェイスの定義
interface UserDetailsProps {
  user: User;
}
const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1" sx={{ mb: 1 }}>
          名前:{user.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          メールアドレス:{user.email}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          役職:{user.role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserDetails;
