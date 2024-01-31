import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Global from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <App />
      <Global />
    </>
  </React.StrictMode>
);
