import { Box, Typography } from "@mui/material";
import React from "react";

function Minitasks() {
  return (
    <>
      <Box
        sx={{
          background: "#fff",
          boxShadow: "0px 18px 36px 5px rgba(135, 135, 135, 0.12)",
          borderRadius: "10px",
          padding: "10px",
          width: "225px",
          mb: 2,
        }}
      >
        <Typography
          sx={{ fontWeight: "900", fontSize: "20px", marginBottom: "5px" }}
        >
          Tsunami
          <Typography sx={{ marginLeft: "30px" }}>3 tasks complete</Typography>
        </Typography>
      </Box>
    </>
  );
}

export default Minitasks;
