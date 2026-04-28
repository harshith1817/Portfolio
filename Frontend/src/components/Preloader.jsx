import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import "./Preloader.css";

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <SyncLoader color={"#8e24b2"} loading={load} size={20} />
    </div>
  );
}

export default Pre;
