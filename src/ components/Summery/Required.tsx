import { Typography, Box } from "@mui/material";
import React from "react";

function Required() {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(137.97deg, #12498E -13.62%, #232844 114.34%)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "16px",
          padding: "35px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <img src="./img/Levelreq.png" alt="" />
          <Box>
            <img src="./img/devider.png" alt="" />
          </Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#fff",
              fontWeight: "600",
              marginTop: "15px",
              marginBottom: "20px",
            }}
          >
            Welcome to Johnny Tsunami! Your Journey starts here as a Drop in the
            ocean.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            5 Required Step
          </Typography>
          <img src="./img/devider.png" alt="" />
          <Typography
            sx={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "700",
              marginTop: "15px",
            }}
          >
            Rewards: <br />
            Hourly Rate
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Required;
