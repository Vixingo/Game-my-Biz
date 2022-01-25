import React from "react";
import SummeryBread from "../Summery/SummeryBread";
import Summeryheader from "../Summery/Summeryheader";
import Hubbar from "./Hubbar";
import Socialbox from "./Socialbox";
import Socialboxholder from "./Socialboxholder";

function Hub() {
  return (
    <>
      <SummeryBread />
      <Summeryheader
        imgsrc="./img/up+1.png"
        title="Hub"
        subtitle="Complete these badges to level up"
      />
      {/* <Hubbar /> */}
      <Socialboxholder />
    </>
  );
}

export default Hub;
