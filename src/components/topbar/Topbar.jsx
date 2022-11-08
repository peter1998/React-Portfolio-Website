import React from "react";

import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer"></div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}
