import { Box, Typography } from "@mui/material";
import React from "react";
import Minitasks from "./Minitasks";

function Leveltask() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(137.97deg, #EE238A -13.62%, #922790 114.34%)",
            boxShadow: "0px 15px 36px 2px rgba(135, 135, 135, 0.12)",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            color: "#fff",
            width: "225px",
          }}
        >
          <Typography>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "20px",
                marginBottom: "5px",
              }}
            >
              Drop
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="./img/check-circle-2.png"
                alt=""
                style={{ marginRight: "5px" }}
              />
              All tasks complete
            </Box>
          </Typography>

          <img style={{ width: "25px" }} src="./img/drop.png" alt="" />
        </div>
      </Box>
    </>
  );
}

export default Leveltask;
