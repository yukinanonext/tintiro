import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Sai } from "../molecules/Sai";

export const SaiContainer = () => {
  const [isRun, setIsRun] = useState<boolean[]>([false, false, false]);

  const stopImg1 = () => {
    setIsRun(isRun.map((value, index) => (index === 0 ? false : value)));
  };

  const stopImg2 = () => {
    setIsRun(isRun.map((value, index) => (index === 1 ? false : value)));
  };

  const stopImg3 = () => {
    setIsRun(isRun.map((value, index) => (index === 2 ? false : value)));
  };

  const changeImg = () => {
    setIsRun([true, true, true]);
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
      >
        START!
      </Button>
      <br />
    </div>
  );
};
