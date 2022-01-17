import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Claimbar() {
  return (
    <>
      <section className="Claimbar">
        <div className="container">
          <Box
            sx={{
              background: "#fff",
              display: "flex",
              justifyContent: "space-between",
              padding: "30px",
              borderRadius: "24px",
              boxShadow: "0px 18px 36px 5px rgba(135, 135, 135, 0.06)",
              position: "relative",
              top: "-40px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img
                  style={{
                    boxShadow: "0px 10px 25px rgba(238, 35, 138, 0.23)",
                    borderRadius: "50%",
                  }}
                  src="./img/claimP.png"
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  marginLeft: "30px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Jane Cooper
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#9B9B9B",
                  }}
                >
                  Product Designer
                </Typography>
              </Box>
            </div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  background:
                    "linear-gradient(95.11deg, #EE238A -0.85%, #922790 101.13%)",
                  borderRadius: "25px",
                  padding: "8px 20px",
                  color: "#fff",
                }}
              >
                <SettingsOutlinedIcon />
                <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                  Settings
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  ml: 3,
                }}
              >
                <PersonOutlineOutlinedIcon />
                <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                  Profile
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  ml: 3,
                }}
              >
                <SettingsOutlinedIcon />
                <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                  Filter
                </Typography>
              </Stack>
            </Box>
          </Box>
        </div>
      </section>
    </>
  );
}

export default Claimbar;
