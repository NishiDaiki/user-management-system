// components/parts/CustomModal.stories.tsx

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "./CustomModal";
import CustomButton from "./CustomButton";
import { Box } from "@mui/material";

//メタデータ定義
const meta: Meta<typeof CustomModal> = {
  title: "Components/CusomModal",
  component: CustomModal,
};
export default meta;

//ストーリーの定義
type Story = StoryObj<typeof CustomModal>;

//デフォルトストーリーの作成
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          モーダルを開く
        </CustomButton>
        <CustomModal
          open={open}
          title="削除確認"
          content="本当にこのユーザーを削除しますか？"
          onClose={() => setOpen(false)}
          onConfirm={() => {
            alert("確認ボタンがクリックされました");
            setOpen(false);
          }}
        />
      </Box>
    );
  },
};
