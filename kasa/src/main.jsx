import { StrictMode } from "react";
//import { createRoot } from 'react-dom/client'
import "./index.css";
import App from "./App.jsx";
import About from "./About.jsx";

import Error from "./components/Error/Error.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="about" element={<About />} />
                  <Route path="*" element={<Error />} />
            </Routes>
      </BrowserRouter>
);
