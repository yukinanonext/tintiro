import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Sai } from "../molecules/Sai";

export const SaiContainer = () => {
  const [isRun, setIsRun] = useState<boolean[]>([false, false, false]);
  const [restSpinSaiNumber, setRestSpinSaiNumber] = useState<number>(0);

  const stopImg1 = () => {
    setIsRun(isRun.map((value, index) => (index === 0 ? false : value)));
    setRestSpinSaiNumber(restSpinSaiNumber - 1);
  };

  const stopImg2 = () => {
    setIsRun(isRun.map((value, index) => (index === 1 ? false : value)));
    setRestSpinSaiNumber(restSpinSaiNumber - 1);
  };

  const stopImg3 = () => {
    setIsRun(isRun.map((value, index) => (index === 2 ? false : value)));
    setRestSpinSaiNumber(restSpinSaiNumber - 1);
  };

  const changeImg = () => {
    setIsRun([true, true, true]);
    setRestSpinSaiNumber(3);
  };

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sai isRun={isRun[0]} stopImg={stopImg1} />
        <Sai isRun={isRun[1]} stopImg={stopImg2} />
        <Sai isRun={isRun[2]} stopImg={stopImg3} />
      </Box>
      <Button
        variant="contained"
        sx={{ width: 200, height: 50, fontSize: "20px", marginTop: 3 }}
        onClick={changeImg}
        disabled={restSpinSaiNumber > 0 ? true : false}
      >
        START!
      </Button>
      <br />
    </div>
  );
};
