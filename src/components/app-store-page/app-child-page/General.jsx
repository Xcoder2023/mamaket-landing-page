import React from "react";
import Store from "../Store";
import Child from "./Child";
import MaketFooter from "../../mamaket-footer-page/MaketFooter";

const General = () => {
  return (
    <>
      <div className="store-vessel">
        <div className="store-vess">
          <Store />
          <Child />
        </div>
        <div className="hip">
          <MaketFooter />
        </div>
      </div>
    </>
  );
};

export default General;
