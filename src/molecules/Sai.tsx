import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import one from "../img/one.png";
import two from "../img/two.png";
import three from "../img/three.png";
import four from "../img/four.png";
import five from "../img/five.png";
import six from "../img/six.png";
import { useInterval } from "../hooks/useInterval";

export interface SaiProps {
  isRun: boolean;
  stopImg: () => void;
}

export const Sai = ({ isRun, stopImg }: SaiProps) => {
  const [saiNumber, setSaiNumber] = useState<number>(0);

  const saiImg = [one, two, three, four, five, six];

  useInterval(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    setSaiNumber(randomNumber);
  }, isRun);

  console.log("render:", saiNumber);

  return (
    <div>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100px",
            border: "solid",
            borderRadius: "5px",
          }}
        >
          <img
            style={{ width: "100%" }}
            src={saiImg[saiNumber]}
            alt="サイコロ"
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        color="error"
        onClick={stopImg}
        disabled={isRun ? false : true}
      >
        STOP!
      </Button>
    </div>
  );
};
