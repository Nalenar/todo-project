import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App, Welcome, ErrorPage, Day, Important } from "./routes/routes"



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} errorElement={<ErrorPage />} />
        <Route path="/app" element={<App />} errorElement={<ErrorPage />}>
          <Route index element={<Day />} />
          <Route path="/app/important" element={<Important />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
