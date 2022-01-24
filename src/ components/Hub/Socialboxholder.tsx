import { Box } from "@mui/material";
import React from "react";
import Socialbox from "./Socialbox";

function Socialboxholder() {
  return (
    <>
      <div className="Socialboxholder">
        <Box
          className="container"
          sx={{
            background: "#FFFFFF",
            boxShadow: "0px 18px 36px 5px rgba(135, 135, 135, 0.25)",
            borderRadius: "71px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "60px",
            marginTop: "100px",
          }}
        >
          <Socialbox imgsrc="./img/fblogo.png" title="Facebook" />
          <Socialbox imgsrc="./img/instalogo.png" title="Instagram" />
          <Socialbox imgsrc="./img/linklogo.png" title="Linked In" />
          <Socialbox imgsrc="./img/twitterlogo.png" title="Twitter" />
          <Socialbox imgsrc="./img/fblogo.png" title="Facebook" />
          <Socialbox imgsrc="./img/fblogo.png" title="Facebook" />
          <Socialbox imgsrc="./img/instalogo.png" title="Instagram" />
          <Socialbox imgsrc="./img/linklogo.png" title="Linked In" />
          <Socialbox imgsrc="./img/twitterlogo.png" title="Twitter" />
          <Socialbox imgsrc="./img/fblogo.png" title="Facebook" />
        </Box>
      </div>
    </>
  );
}

export default Socialboxholder;
