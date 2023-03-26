import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RuleModal } from "../organisms/RuleModal";

export const Home = () => {
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
        variant="h3"
        sx={{
          p: 2,
          fontWeight: "bold",
        }}
      >
        チンチロ
      </Typography>
      <Box sx={{ p: 2, m: 2, border: "4mm ridge rgba(211, 220, 50, .6)" }}>
        <Typography
          variant="body1"
          sx={{
            p: 2,
          }}
        >
          チンチロが遊べるアプリケーションです
          <br />
          飲み会や簡単な勝負等で使えるかも
        </Typography>
        <Button
          variant="contained"
          sx={{ width: 100, height: 50, fontSize: "20px" }}
        >
          <Link
            to={`/tintiro/play`}
            style={{ color: "white", textDecoration: "none" }}
          >
            Play!
          </Link>
        </Button>
      </Box>
      <RuleModal />
    </div>
  );
};
