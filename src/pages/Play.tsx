import { Typography } from "@mui/material";
import { SaiContainer } from "../organisms/SaiContainer";

export const Play = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: -50,
      }}
    >
      <Typography
        sx={{
          p: 2,
          fontWeight: "bold",
          fontSize: { xs: "30px", sm: "50px" },
        }}
      >
        Play画面
      </Typography>
      <SaiContainer />
    </div>
  );
};
