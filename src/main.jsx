import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
