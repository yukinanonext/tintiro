import { Box, Button } from "@mui/material";
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
  stopImg: (n: number) => void;
  stopSaiNumber: number;
}

export const Sai = ({ isRun, stopImg, stopSaiNumber }: SaiProps) => {
  const [saiNumber, setSaiNumber] = useState<number>(0);

  const saiImg = [one, two, three, four, five, six];

  useInterval(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    setSaiNumber(randomNumber);
  }, isRun);

  return (
    <div>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "70px", sm: "100px" },
            border: "solid",
          }}
        >
          <img
            style={{ width: "100%" }}
            src={
              isRun
                ? saiImg[saiNumber]
                : stopSaiNumber
                ? saiImg[stopSaiNumber]
                : saiImg[0]
            }
            alt="サイコロ"
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        color="error"
        onClick={() => stopImg(saiNumber)}
        disabled={isRun ? false : true}
        sx={{
          width: { xs: "20px", sm: "100px" },
          height: { xs: "30px", sm: "40px" },
          fontSize: { xs: "10px", sm: "15px" },
        }}
      >
        STOP!
      </Button>
    </div>
  );
};
