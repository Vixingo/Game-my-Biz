import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Levelprofile() {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(137.97deg, #12498E -13.62%, #232844 114.34%)",
          boxShadow: "0px 15px 36px 2px rgba(135, 135, 135, 0.12)",
          borderRadius: "33px",
          padding: "30px",
          height: "270px",
        }}
      >
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <img src="./img/levelprofile.png" alt="" />
          </div>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Esther <br /> Howard
          </Typography>
        </div>
        <Typography
          variant="h6"
          sx={{ color: "#fff", fontSize: "17px", marginTop: "30px" }}
        >
          Ester is the most decorated Tech in Tsunami History! A true warrior
          with a heart of gold.
        </Typography>
      </Box>
    </>
  );
}

export default Levelprofile;
