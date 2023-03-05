import { Typography } from "@mui/material";
import { SaiContainer } from "../organisms/SaiContainer";

export const Play = () => {
  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          p: 2,
          fontWeight: "bold",
        }}
      >
        Play画面
      </Typography>
      <SaiContainer />
    </div>
  );
};
