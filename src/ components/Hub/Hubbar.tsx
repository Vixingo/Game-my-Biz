import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Hubbar() {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(180deg, #EE238A 0%, #922790 100%)",
          borderRadius: "0px 0px 54px 54px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 50px",
          }}
        >
          <Box>
            <img src="./img/menubarwhite.png" alt="" />
          </Box>
          <Box>
            <img src="./img/gamelogo.png" alt="" />
          </Box>
          <Box>
            <img
              src="./img/claimP.png"
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Hubbar;
