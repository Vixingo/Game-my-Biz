import React from "react";
import Claimbar from "../ components/Claim/Claimbar";
import Claimbox from "../ components/Claim/Claimbox";
import Claimboxholder from "../ components/Claim/Claimboxholder";
import Claimheader from "../ components/Claim/Claimheader";

function Claimpage() {
  return (
    <>
      <Claimheader />
      <Claimbar />
      <Claimboxholder />
    </>
  );
}

export default Claimpage;
