import { Box } from "@mui/material";
import React from "react";

function Progress() {
  return (
    <>
      <div className="container">
        <Box
          sx={{
            position: "relative",
            marginTop: "250px",
            marginBottom: "250px",
          }}
        >
          <div
            className="progress"
            style={{
              height: "4px",
              width: "90%",
              margin: "0 auto",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "40%" }}
            ></div>
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              top: "-50px",
              width: "100%",
            }}
          >
            <img src="./img/Levelreq.png" alt="" />
            <img src="./img/Levelreq.png" alt="" />
            <img
              src="./img/Levelreq2.png"
              alt=""
              style={{ width: "100px", height: "112px" }}
            />
            <img
              src="./img/Levelreq2.png"
              alt=""
              style={{ width: "100px", height: "112px" }}
            />
            <img
              src="./img/Levelreq2.png"
              alt=""
              style={{ width: "100px", height: "112px" }}
            />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Progress;
