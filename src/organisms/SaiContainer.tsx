import { Box } from "@mui/material";
import React from "react";
import { Sai } from "../molecules/Sai";

export const SaiContainer = () => {
  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sai />
        <Sai />
        <Sai />
      </Box>
    </div>
  );
};
