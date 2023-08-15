import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useResultText } from "../hooks/useResultText";
import { Sai } from "../molecules/Sai";

export const SaiContainer = () => {
  const [isRun, setIsRun] = useState<boolean[]>([false, false, false]);
  const [restSpinSaiNumber, setRestSpinSaiNumber] = useState<number>(0);
  const [allSaiNumbers, setAllSaiNumbers] = useState<number[]>([0, 0, 0]);

  const stopImg1 = (n: number) => {
    setIsRun(isRun.map((value, index) => (index === 0 ? false : value)));
    setAllSaiNumbers([n, allSaiNumbers[1], allSaiNumbers[2]]);
    setRestSpinSaiNumber(restSpinSaiNumber - 1);
  };

  const stopImg2 = (n: number) => {
    setIsRun(isRun.map((value, index) => (index === 1 ? false : value)));
    setAllSaiNumbers([allSaiNumbers[0], n, allSaiNumbers[2]]);
    setRestSpinSaiNumber(restSpinSaiNumber - 1);
  };

  const stopImg3 = (n: number) => {
    setIsRun(isRun.map((value, index) => (index === 2 ? false : value)));
    setAllSaiNumbers([allSaiNumbers[0], allSaiNumbers[1], n]);
    setRestSpinSaiNumber(restSpinSaiNumber - 1);
  };

  const changeImg = () => {
    setIsRun([true, true, true]);
    setRestSpinSaiNumber(3);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sai
          isRun={isRun[0]}
          stopImg={stopImg1}
          stopSaiNumber={allSaiNumbers[0]}
        />
        <Sai
          isRun={isRun[1]}
          stopImg={stopImg2}
          stopSaiNumber={allSaiNumbers[1]}
        />
        <Sai
          isRun={isRun[2]}
          stopImg={stopImg3}
          stopSaiNumber={allSaiNumbers[2]}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          width: { xs: 150, sm: 200 },
          height: { xs: 40, sm: 50 },
          fontSize: { xs: "18px", sm: "20px" },
          marginTop: 3,
        }}
        onClick={changeImg}
        disabled={restSpinSaiNumber > 0 ? true : false}
      >
        START!
      </Button>
      <Box
        sx={
          allSaiNumbers.length === 3 && restSpinSaiNumber === 0
            ? { p: 3, m: 2, mb: 0, border: "double 5px #4ec4d3" }
            : {}
        }
      >
        {useResultText(
          allSaiNumbers.length === 3 && restSpinSaiNumber === 0
            ? allSaiNumbers
            : []
        )}
      </Box>
      <br />
    </div>
  );
};
