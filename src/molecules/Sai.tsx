import { Box, Button } from "@mui/material";
import { useState } from "react";
import one from "../img/one.png";
import two from "../img/two.png";
import three from "../img/three.png";
import four from "../img/four.png";
import five from "../img/five.png";
import six from "../img/six.png";
import { useInterval } from "../hooks/useInterval";

export const Sai = () => {
  const [saiNumber, setSaiNumber] = useState<number>(0);
  const [isRun, setIsRun] = useState<boolean>(false);

  const saiImg = [one, two, three, four, five, six];

  useInterval(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    setSaiNumber(randomNumber);
  }, isRun);

  const changeImg = () => {
    setIsRun(true);
  };

  const stopImg = () => {
    setIsRun(false);
  };

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

      <Button onClick={changeImg}>start</Button>
      <Button onClick={stopImg}>stop</Button>
    </div>
  );
};
