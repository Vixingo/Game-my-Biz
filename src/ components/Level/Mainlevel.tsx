import { Box } from "@mui/material";
import React from "react";
import Leveltask from "./Leveltask";
import Minitasks from "./Minitasks";

function Mainlevel() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Leveltask />
        <Minitasks />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Minitasks />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Minitasks />
        <Minitasks />
      </Box>
    </>
  );
}

export default Mainlevel;
