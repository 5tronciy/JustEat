import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "normalize.css";

document.body.innerHTML = '<div id="root"></div>';

import "./utils/addImageClass";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
