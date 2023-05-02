import React from "react";

import { useParams } from "react-router-dom";
const Pdetails = () => {
  let { id, pid } = useParams();
  console.log();
  return (
    <div>
      <h1>{id}</h1>
      {pid&&<div className="text-5xl text-center">
        from diffrent page : {pid}
        <h1>
          In This Page Contain Two Different PARAM fROM difrrent url the page
          open with difreern tlayOut
        </h1>
      </div>}
    </div>
  );
};

export default Pdetails;
