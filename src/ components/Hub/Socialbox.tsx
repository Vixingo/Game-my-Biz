import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import ReactDOM from "react-dom";

const blue = {
  500: "#12498E",
};

const grey = {
  400: "#BFC7CF",
  500: "#AAB4BE",
};

const Root = styled("span")`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

function Socialbox(props: { imgsrc: string; title: string }) {
  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };
  return (
    <>
      <Box
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 18px 36px 4px rgba(135, 135, 135, 0.18)",
          borderRadius: "24px",
          textAlign: "center",
          padding: "20px 50px",
          marginBottom: "50px",
        }}
      >
        <img
          src={props.imgsrc}
          alt="Fb-logo"
          style={{ width: "110px", height: "110px" }}
        />
        <Typography
          className="title"
          sx={{
            color: "#000000",
            fontSize: "22px",
            fontWeight: "700",
            lineHeight: "26px",
            marginTop: "10px",
            marginBottom: "5px",
          }}
        >
          {props.title}
        </Typography>
        {/* <SwitchUnstyled component={Root} {...label} defaultChecked /> */}
      </Box>
    </>
  );
}

export default Socialbox;
